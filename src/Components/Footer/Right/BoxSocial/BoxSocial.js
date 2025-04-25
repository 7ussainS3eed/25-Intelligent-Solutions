import styles from "./BoxSocial.module.css"

function BoxSocial({img, text}) {
  return (
    <div className={styles.boxSocial}>
          <img src={img} alt={"social"}/>
          <span>{text}</span>
    </div>
  )
}

export default BoxSocial