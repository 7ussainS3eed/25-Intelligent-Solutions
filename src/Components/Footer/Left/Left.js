import styles from "./Left.module.css";

import Triangle from "../../Triangle/Triangle";
import Way from "./Way/Way";

function Left({emailIcon, phoneIcon, whatsIcon, email, phone, whats}) {
  return (
    <div className={styles.left}>
      <div className={styles.title}>
        <h3>تواصل معنا</h3>
        <Triangle/>
      </div>
      <div className={styles.body}>
        <Way 
          icon={emailIcon}
          arText={"البريد الالكتروني"}
          enText={email}
        />
        <Way 
          icon={phoneIcon}
          arText={"هاتفيا"}
          enText={phone}
        />
        <Way 
          icon={whatsIcon}
          arText={"واتساب"}
          enText={whats}
        />
      </div>
    </div>
  )
}

export default Left;