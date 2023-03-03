import React, { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorReducer() {
  // InitialPerson 변수는 person-reducer.js 모듈 내에서만 접근이 가능.
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  };
  //     setPerson((person) => ({
  //       ...person,
  //       // mentors는 배열이니까 기존의 배열을 다른 배열로 변환할 수 있는 map을 이용
  //       mentors: person.mentors.map((mentor) => {
  //         return mentor.name === prev ? { ...mentor, name: current } : mentor;
  //       }),

  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: "added", name, title });
  };
  // setPerson((person) => ({
  //   ...person,
  //   // mentors는 배열, person.mentors를 스프레드 연산자를 이용하여 낱개로 풀어줌, 입력받은 키와 value값을 뒤에다 추가하고 싶으면 { } 를 뒤에, 앞에다 추가하고싶으면 앞에 적어주면됩니다.
  //   // 추가적으로 변수명을 name이라 설정하여서, name:name이므로 name이라고 코드 작성해도 됩니다.
  //   mentors: [...person.mentors, { name: addName, title: addTitle }],
  // }));

  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  };
  // setPerson((person) => ({
  //   ...person,
  //   mentors: [
  //     // filter 메소드 활용 (멘토 이름이 우리가 입력받은 이름이 아닌 것들만 멘토로 새롭게 지정) 즉, 밥 입력시, 밥이 아닌 아이들만 필터링해주어서 새롭게 배열을 만듬
  //     ...person.mentors.filter((mentor) => mentor.name !== delName),
  //   ],
  // }));

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
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
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
