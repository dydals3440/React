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
          //   기존에 person에있는 값들을 받아와서(key/value를 낱개로 풀어서) 복사를 해올것임.
          // 실제로 업데이트 하고자 하는 것은 mentor:, mentor는 중첩 객체이므로 person에있는 mentor를 낱개로 풀어서(keyvalue)복사 , mentor의 이름을 전달받은 name으로 update
          //name: name 키 밸류가 같으므로 name으로 축약해도 ㄱㅊ
          // 이전 값을 받아서 객체를 리턴해줄떄는 소괄호로 묶어주어야 한다.  중괄호만 사용하면 코드블럭인지 객체인지 모르기 떄문이다. 소괄호 안에 중괄호를 이용해서 객체를 반환할 수 있도록 하자.
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
