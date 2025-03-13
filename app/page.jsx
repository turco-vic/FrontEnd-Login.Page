import styles from "../styles/login.module.css"
import Input from "../components/input"

export default function login(){
return (
    <div className={styles.container}>   
    <div className={styles.form}>
    <div className={styles.text}>
        <h1>Login</h1>
        <h6>Bem vindo ao Login</h6>
    </div>
    <div className={styles.inputs}>
        <Input text = "Username"/>
        <Input text = "Password"/>
    <div className={styles.button}>
        <button>Login</button>
    </div>
    <div className={styles.button}>
        <button>Cadastro</button>
    </div>
    </div>
        <div className={styles.b1}></div>
        <div className={styles.b2}></div>
        <div className={styles.b3}></div>
        <div className={styles.b4}></div>
    </div>
    </div>
  )
}