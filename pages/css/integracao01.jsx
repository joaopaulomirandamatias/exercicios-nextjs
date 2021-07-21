import styles from "./integracao01.module.css"
export default function integracao(){
  return (
    <div id={styles.integracao}>
      <div className={styles.vermelha}>Text #01</div>
      <div className={styles.amarela}>Text #02</div>
      <div className={styles.azul}>Text #03</div>
    </div>
  )
}