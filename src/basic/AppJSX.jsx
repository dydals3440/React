import "./App.css";

function AppJSX() {
  const name = "용민";
  const list = ["우유", "딸기", "바나나", "피자"];
  return (
    <>
      <h1 className="orange">Hello!</h1>
      <h2>HI!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img style={{ width: "200px", height: "200px" }} src="" alt="nature" />
    </>
  );
}

export default AppJSX;
