import React, { useState } from "react";
// immer를 이용
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  // useState대신 useImmer를 사용 (setPerson이 아닌 updatePerson으로 이용)
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    // map을 활용하지 않고 updatePerson에서 제공해주는 person이라는 객체를 그대로 업데이트
    // updatePerson((person) => (person.name = '새로운 이름!')) 이런식으로 쓰면 자동으로 새로운 이름으로 변경이 됩니다.
    // 즉, immer는 person이라는 새로운 객체를 만들어서 업데이트하는 부분만 변경해준다.

    // 우리가 원하는 것은 person안에있는 mentor의 이름을 변경하는것임.
    updatePerson((person) => {
      // person에 있는 mentors를 순회하면서 찾고자하는(prev)이름이 맞는지 확인, 그 후 업데이트
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    // 실제 객체를 바로 직접적으로 수정하는 것처럼 사용 가능
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    updatePerson((person) => {
      // 삭제하고자 하는 멘토의 인덱스를 찾을꺼임. 멘토중에 이름이 우리가 찾고자하는 이름인지 그 사람의 인덱스를 찾은 후
      const index = person.mentors.findIndex((m) => m.name === name);
      //
      person.mentors.splice(index, 1);
    });
  };
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
