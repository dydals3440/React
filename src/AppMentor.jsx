import React, { useState } from "react";

export default function AppMentor() {
  // mentor라는 중첩된 객체를 가지고 있다.
  const [person, setPerson] = useState({
    name: "용민",
    title: "개발자 지망생",
    mentor: {
      name: "엘리",
      title: "풀스택 개발자",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        oninput
        onClick={() => {
          const name = prompt(`whats your mentor name?`);
          //   기존 person name에 접근하기 보다는 우리가 이전걸 사용하고 싶다
          //   기존에 있었던 값에서 필요한 부분(mentor.name)만 변경한다는 느낌으로 작성 코드를
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`Whats your mentor title?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.title, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
