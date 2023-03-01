import React, { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
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
