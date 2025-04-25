import styles from "./Link.module.css"

function Link({text}) {
  return (
    <div className={styles.link}>
        <span>&gt;&gt;</span>
        <span>{text}</span>
    </div>
  )
}

export default Link
