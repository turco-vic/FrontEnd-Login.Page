import styles from "../styles/Card.module.css";

export default function Card({ title, text, imgs }) {
    return (
        <div className={styles.card}>
            <h1>{title}</h1>
            {text && <p>{text}</p>}
            {imgs && (
                <div className={styles.images}>
                    {imgs.map((img, index) => (
                        <img key={index} src={img} alt={`Imagem ${index + 1}`} className={styles.image} />
                    ))}
                </div>
            )}
        </div>
    );
}