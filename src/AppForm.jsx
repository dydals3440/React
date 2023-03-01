import React, { useState } from "react";

export default function AppForm() {
  // 연관된 데이터라면 객체로 관리해나가는 것이 좋다, 객체의 상태를 관리하는 것은 immer, reducer를 사용해도 좋다.
  const [form, setForm] = useState({ name: "", email: "" });
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    // preventDefault를 하지 않으면 input갑 입력 후 submit시 페이지가 새로고침이 된다. 이를 방지할떄 이용
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    // 어떤것이 변경되었는지 정보 받기
    const { name, value } = e.target;
    // 기존에 있는 form은 유지하고, 현재 input이 변경되고 있는 이름의 키에 전달받은 value를 덮어씌울꺼임.
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        // value={name}
        // onChange={(e) => {
        //   setName(e.target.value);
        // }}
      />
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        // value={email}
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
      />
      <button>Submit</button>
    </form>
  );
}
