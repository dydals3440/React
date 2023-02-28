import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      // mentors는 배열이니까 기존의 배열을 다른 배열로 변환할 수 있는 map을 이용
      mentors: person.mentors.map((mentor) => {
        return mentor.name === prev ? { ...mentor, name: current } : mentor;
      }),
    }));
  };
  const handleAdd = () => {
    const addName = prompt(`어떤 사람을 추가하고 싶은가요?`);
    const addTitle = prompt(`그 사람의 타이틀은 무엇인가요?`);
    setPerson((person) => ({
      ...person,
      // mentors는 배열, person.mentors를 스프레드 연산자를 이용하여 낱개로 풀어줌, 입력받은 키와 value값을 뒤에다 추가하고 싶으면 { } 를 뒤에, 앞에다 추가하고싶으면 앞에 적어주면됩니다.
      // 추가적으로 변수명을 name이라 설정하여서, name:name이므로 name이라고 코드 작성해도 됩니다.
      mentors: [...person.mentors, { name: addName, title: addTitle }],
    }));
  };
  const handleDelete = () => {
    const delName = prompt(`어떤 사람의 정보를 삭제하고 싶나요?`);
    setPerson((person) => ({
      ...person,
      mentors: [
        // filter 메소드 활용 (멘토 이름이 우리가 입력받은 이름이 아닌 것들만 멘토로 새롭게 지정) 즉, 밥 입력시, 밥이 아닌 아이들만 필터링해주어서 새롭게 배열을 만듬
        ...person.mentors.filter((mentor) => mentor.name !== delName),
      ],
    }));
  };
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
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
      <button onClick={handleAdd}>멘토 이름/타이틀 추가하기</button>
      <button onClick={handleDelete}>멘토 이름/타이틀 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "용민",
  title: "개발자",
  mentors: [
    {
      name: "엘리",
      title: "드림코딩 강사",
    },
    {
      name: "밥",
      title: "시니어 개발자",
    },
    {
      name: "살라",
      title: "시니어 개발자",
    },
  ],
};
