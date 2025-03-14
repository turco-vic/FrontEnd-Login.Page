import styles from '../../styles/Signin.module.css';
import Card from '../../components/Card';

export default function Initial() {
    return (
        <div className={styles.container}>
            <div className={styles.perfil}>
                <div className={styles.image}>
                    <img src="https://avatars.githubusercontent.com/u/157549897?v=4" alt="" />
                    <p className={styles.name}>Enzo Turcovic</p>
                </div>
                <Card title={"Sobre mim"} text={"Olá! Meu nome é Enzo, tenho 17 anos, e atualmente estou cursando Desenvolvimento de sistema no SENAI Valinhos!"} />
                <Card title={"Hobbies"} text={"Gosto de programar"} />
                <Card title={"Descrição"} text={"Dev"} />
            </div>
        </div>
    )
}