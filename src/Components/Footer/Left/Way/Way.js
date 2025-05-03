import styles from "./Way.module.css";

function Way({icon, arText, enText}) {
  return (
    <div className={styles.way}>
      <img 
        src={icon} 
        alt="icon"
      />
      <div>
        <h4>{arText}</h4>
        <p>{enText}</p>
      </div>
    </div>
  );
}

export default Way;