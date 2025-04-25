import styles from "./Boxes.module.css"
import Box from "./Box/Box"

function Boxes({emailIcon, phoneIcon, whatsIcon}) {
  return (
    <div className={styles.boxes}>
      <Box 
        icon={emailIcon}
        ar={"البريد الإلكترونى"}
        en={"info@intelligentsolutionss.com"}
      />
      <Box 
        icon={phoneIcon}
        ar={"هاتفيا"}
        en={"+966 560 904 524"}
      />
      <Box 
        icon={whatsIcon}
        ar={"واتساب"}
        en={"+966 560 904 524"}
      />
    </div>
  )
}

export default Boxes;