// custom hook은 react components와 비슷 함수로 만들고, use키워드 사용, 일반 컴포넌트 처럼 state 사용 가능, useEffect, useCallBack, useMemo 사용가능. 다만, ui component는 ui를 반환하는 반면, custom훅은 우리가 원하는 데이터 [loading, error, products]같은 것을 반환한다.

// Hooks은 (함수들은) 값의 재사용이 아니라, 로직의 재사용을 위한 것
import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [products, setProducts] = useState([]);
  // 로딩이 안된 상태 false
  const [loading, setLoading] = useState(false);
  // 에러 상태는 처음에 없는 상태이니 undefined
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((err) => {
        setError("에러가 발생했음!");
      })
      .finally(() => setLoading(false));
    return () => {
      console.log("🪠 꺠끗하게 청소하는 일들을 합니다");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
