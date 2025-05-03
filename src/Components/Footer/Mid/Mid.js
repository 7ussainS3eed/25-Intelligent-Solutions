import styles from "./Mid.module.css";

import Triangle from "../../Triangle/Triangle";
import Link from "./Link/Link";

function Mid() {
  return (
    <div className={styles.mid}>
      <div className={styles.title}>
        <h3>روابط هامة</h3>
        <Triangle/>
      </div>
      <div className={styles.links}>
        <div className={styles.rightLinks}>
          <Link text="الصفحة الرئيسية"/>
          <Link text="خدماتنا"/>
          <Link text="أراء العملاء"/>
          <Link text="سياسة الخصوصية"/>
          <Link text="اعمالنا"/>
          <Link text="الأسئلة الشائعة"/>
          <Link text="تواصل معنا"/>
        </div>
        <div className={styles.leftLinks}>
          <Link text="نبذة عنا"/>
          <Link text="شركاؤنا"/>
        </div>
      </div>
    </div>
  )
}

export default Mid;