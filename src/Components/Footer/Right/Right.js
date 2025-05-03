import styles from "./Right.module.css";

import face from "../../../assets/photos/Path.png";
import whats from "../../../assets/photos/WhatsApp.png";
import x from "../../../assets/photos/Frame.png";
import insta from "../../../assets/photos/Instagram - Original.png";

import BoxSocial from "./BoxSocial/BoxSocial";

function Right({logo}) {
  return (
    <div className={styles.right}>
      <div className={styles.logo}>
        <img 
          src={logo} 
          alt="logo"
        />
      </div>
      <p>نحن نخلق قصة فريدة تجمع بين تسخير التقنيات الحديثة والفن الرقمي للإرتقاء بعلامتك التجارية والوصول بها لتجربة مستخدم استثنائية.</p>
      <div className={styles.social}>
        <BoxSocial 
          img={face} 
          text={"فيسبوك"}
        />
        <BoxSocial 
          img={whats} 
          text={"واتساب"}
        />
        <BoxSocial 
          img={x} 
          text={"اكس"}
        />
        <BoxSocial 
          img={insta} 
          text={"انستجرام"}
        />
      </div>
    </div>
  );
}

export default Right;