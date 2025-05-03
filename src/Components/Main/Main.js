import styles from "./Main.module.css";

import Triangle from "../Triangle/Triangle";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>تواصل معنا</h1>
        <Triangle/>
      </div>
      <div className={styles.footer}>
        <span>الصفحة الرئيسية</span>
        <span>&#62;&#62;</span>
        <span>نبذة عنا</span>
      </div>
    </div>
  );
}

export default Main;