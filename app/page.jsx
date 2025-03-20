"use client";
import styles from "../styles/Loginpage.module.css";
import Input from "../components/input";
import { useRouter } from "next/navigation";

export default function login() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.text}>
          <h1>Welcome!</h1>
        </div>
        <div className={styles.inputstxt}>
          <Input text="Username" />
          <Input id="password" tipo="password" text="Password" />
        </div>
        <div className={styles.check}>
          <div className={styles.buttons}>
            <button onClick={() => router.push("/signin")}>Sign In</button>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => router.push("/signup")}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}