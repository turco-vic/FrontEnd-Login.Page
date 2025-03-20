import styles from "../styles/input.module.css"

export default function Input({ text }) {
    return (
        <div>
            <input className={styles.input} type="password" placeholder={text} />
        </div>
    )
}