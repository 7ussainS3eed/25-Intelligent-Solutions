import styles from "./Footer.module.css";
import Right from "./Right/Right"
import Mid from "./Mid/Mid"
import Left from "./Left/Left"

function Footer({logo, emailIcon, phoneIcon, whatsIcon, email, phone, whats}) {
  return (
    <footer className={styles.footer}>
      <Right logo={logo}/>
      <Mid/>
      <Left 
        emailIcon={emailIcon}
        phoneIcon={phoneIcon}
        whatsIcon={whatsIcon}
        email={email}
        phone={phone}
        whats={whats}
      />
    </footer>
  )
}

export default Footer