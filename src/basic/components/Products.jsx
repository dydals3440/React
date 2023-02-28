import React, { useEffect, useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  // 컴포넌트가 처음 등록했을떄 처리해야할 일이 잇다면 컴포넌트 안에서 하면 무한루프에 빠지니 useEffect 내부에서 해야하고 한번만 처리 되야 한다면 두번째 인자를 [] 텅텅 비게 하면된다.
  useEffect(() => {
    // 컴포넌트가 보이게되면(mount)되면 아래 콜백 실행
    // 체크가 된다면 sale이 된 json파일 정보만 받아옴
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
    // 토글을 눌러 컴포넌트들이 안보이게 된다면 메모리 청소를 해야하므로 소켓 네트워크 통신을 닫는 것을 처리할떄는 useEffect의 return 함수로 처리하면 됩니다. 화면에서 사라질때 (unMOunt)될떄 호출되는 콜백함수이다.
    return () => {
      console.log("🪠 꺠끗하게 청소하는 일들을 합니다");
    };
  }, [checked]);
  // dependency 즉, 체크값이 변동될떄마다

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          // 리스트에 있는 자식들은 unique한 키를 갖어야함 각각의 아이템 마다 고유한 인덱스 값을 갖고 있어야함 json파일을 fetch하므로 id라는 정보를 추가해주자!
          // 리스트에 자식 요소를 보여줄때 꼭 성능 향상을 위해 key라는 요소를 써야한다.
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
