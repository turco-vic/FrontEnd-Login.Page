"use client";
import styles from "../../styles/Signup.module.css"
import Input from "../../components/input"
import { useRouter } from "next/navigation"

export default function signup() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <div className={styles.titletxt}>
                    <h1>Sign Up</h1>
                </div>
                <h2>Create your account!</h2>
                <Input tipo="text" text="Username" />
                <Input id="password" tipo="password" text="Password" />
                <Input id="confirmPass" tipo="password" text="Confirm Password" />
                <button className={styles.button} onClick={() => router.push("/")}>Sign Up</button>
                <nav>
                    <p>Do you already have an account?<button className={styles.signin} onClick={() => router.push("/")}>Sign In</button></p>
                </nav>
            </div>
        </div>
    )
}