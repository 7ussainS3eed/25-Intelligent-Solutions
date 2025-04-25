import styles from "./Box.module.css"

function Box({icon, ar, en}) {
  return (
    <div className={styles.box}>
      <img src={icon} alt="icon"></img>
      <h2>{ar}</h2>
      <p>{en}</p>
    </div>
  )
}

export default Box