import styles from "../styles/Card.module.css"

export default function Card({ title, text, img }) {
    return (
        <div className={styles.card}>
            <h1>{title}</h1>
            <p>{text}</p>
            <img>{img}</img>
        </div>
    )
}