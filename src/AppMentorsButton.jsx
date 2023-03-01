import React, { useReducer, useMemo, useCallback, memo } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  // InitialPerson 변수는 person-reducer.js 모듈 내에서만 접근이 가능.
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  //   2. useCallback(() => callback, [])으로 감싸준다.
  //   useCallback을 아무리 호출해도 dependencies가 변경되지 않는이상 동일한 콜백함수의 객체를 가지고 있음.
  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: "added", name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  }, []);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      {/* <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button> */}

      {/* prop을 전달하게되면 매번 component를 호출할때마다  아무리 똑같은 값이라 할지라도 새로운 props가 생성된다 버튼에게 값이 전달될떄 새로운 객체가 만들어지더라도 동일한 값이라면 다시 리랜더링 하지말라고 버튼 자체를(memo)해주는 것이다 */}
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate} />
      <Button text="삭제하기" onClick={handleDelete} />
      <Button text="멘토 추가하기" onClick={handleAdd} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log("Button", text, "re-rendering 😜");
  const result = useMemo(() => calculateSomething(), []);
  //   성능 개선 시연을 위해 일부로 복잡한 일을 하게함
  //   const result = calculateSomething();
  //    1. useMemo() 활용 (이거 메모해놔, 기억해놔 캐시해놔 라는 느낌)
  //   useMemo가 호출될떄 딱 한번만 실행, 특정한 dependency를 명령하지않는이상 1번만 작동 (특정 값 변경이 될떄 작동되길원하면 즉, 텍스트 변경시 호출을 원하면 [text] 이런식으로 dependency 설정)
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

// 실제로 이렇게 계산하는 코드가 많고, 속도가 오래걸리는 일들을 수행한다면
// virtual돔을 만드는데도 오래걸림, 앱 성능에 큰 영향을 줍니다.
function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log("🍌");
  }
  return 10;
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};

// useMemo, useCallback, memo components를 이용해서 실제 prop이나 state값, dependencies가 변경되지 않는이상 리랜더링을 방지할 수 있다.
// 정말 무거운일을 담당하거나, 아니면 component tree가 복잡한경우 성능 측정 후 문제가 될떄 활용하는 것이 중요하다.
