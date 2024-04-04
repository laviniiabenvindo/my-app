import styles from "./SayMyName.module.css"
function SayMyName (props) {
 return (
  <div className={styles.sayMyNameContainer}>
   <p>Fala ai {props.nome}, suave?</p>
  </div>
 )
}

export default SayMyName;