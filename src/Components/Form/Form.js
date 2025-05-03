import styles from "./Form.module.css";

import loopArrow from "../../assets/photos/Vector3.png";
import nameIcon from "../../assets/photos/Group.png";
import phoneIcon from "../../assets/photos/Group 1171275181.png";
import emailIcon from "../../assets/photos/Vector2.png";
import servIcon from "../../assets/photos/Vector.png";
import msgIcon from "../../assets/photos/ant-design_message-outlined.png";

import Arrow from "../Arrow/Arrow";

function Form() {
  return (
    <section>
      <img 
        src={loopArrow} 
        alt={loopArrow} 
        className={styles.loopArrow}
      />
      <header className={styles.header}>
        <h2>هل لديك أي أسئلة أو استفسارات, ارسل طلبك!</h2>
        <p>لا تتردد في التواصل معنا, وسيتم الرد عليك فى اسرع وقت.</p>
      </header>
      <form className={styles.form}>
        <div className={styles.first}>
          <div>
            <img 
              src={nameIcon}
              alt="nameIcon"
            />
            <input placeholder="الاسم"></input>
          </div>
          <div>
            <img 
              src={phoneIcon}
              alt="phoneIcon"
            />
            <input placeholder="رقم الهاتف"></input>
          </div>
          <div>
            <img 
              src={emailIcon}
              alt="emailIcon"
            />
            <input placeholder="البريد الالكترونى"></input>
          </div>
          <div>
            <img 
              src={servIcon}
              alt="servIcon"
            />
            <input placeholder="الخدمة"></input>
          </div>
        </div>
        <div className={styles.second}>
            <img 
              src={msgIcon}
              alt="msgIcon"
            />
          <textarea placeholder="الرسالة ..."/>
        </div>
        <button type="submit">
          ارسال الان
          <Arrow/>
        </button>
      </form>
    </section>
  )
}

export default Form;