import styles from "../styles/login.module.css"
import Input from "../components/input"

export default function login() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.text}>
          <h1>Login</h1>
        </div>
        <div className={styles.inputstxt}>
          <Input text="Username" />
          <Input text="Password" />
        </div>
        <div className={styles.check}>
          <div className={styles.buttons}>
            <button>Login</button>
          </div>
          <div className={styles.buttons}>
            <button>Cadastro</button>
          </div>
        </div>
      </div>
    </div>
  )
}
