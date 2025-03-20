import Link from 'next/link';
import styles from '../../styles/Signin.module.css';
import Card from '../../components/Card';

export default function Initial() {
    const tecnologiasImgs = [
        "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x2048-eugu5rfi.png",
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
    ];

    return (
        <div className={styles.container}>
            <div className={styles.return}>
                <Link href="/">
                    <div className={styles.returnButton}>
                        <h5>🠔</h5>
                    </div>
                </Link>
            </div>
            <div className={styles.perfil}>
                <div className={styles.image}>
                    <img src="https://avatars.githubusercontent.com/u/157549897?v=4" alt="" />
                    <p className={styles.name}>Enzo Turcovic</p>
                </div>
                <Card title={"Sobre mim"} text={"Olá! Meu nome é Enzo, tenho 17 anos, e atualmente estou cursando Desenvolvimento de sistema no SENAI Valinhos!"} />
                <Card title={"Objetivo"} text={"Este site foi feito com o propósito de realizar a ativade de Front-End utilizando Next.JS!"} />
                <Card title={"Tecnologias que utilizo:"} imgs={tecnologiasImgs} />
            </div>
        </div>
    );
}