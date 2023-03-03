import React from "react";
// post CSS 사용시 파일을 객체로 전달해줍니다.이름은 styles가 아닌 다른 것으로 사용해도됨
import styles from "./Button1.module.css";

export default function Button() {
  return <button className={styles.button}>Button1-333멋져</button>;
}
