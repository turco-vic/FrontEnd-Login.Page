"use client";
import styles from "../../styles/Signup.module.css";
import Input from "../../components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validatePassword = (password) => {
        if (password.length === 0) {
            setPasswordError("");
            setSuccessMessage("");
        } else if (password.length < 6) {
            setPasswordError("A senha deve ter pelo menos 6 caracteres.");
            setSuccessMessage("");
        } else {
            setPasswordError("");
            setSuccessMessage("Senha válida!");
        }
    };

    const validateConfirmPassword = (confirmPassword) => {
        if (password !== confirmPassword) {
            setConfirmPasswordError("As senhas não coincidem.");
        } else {
            setConfirmPasswordError("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verifica se há erros de validação ou campos vazios
        if (passwordError || confirmPasswordError || !username || !password || !confirmPassword) {
            alert("Por favor, corrija os erros antes de prosseguir.");
            return;
        }

        try {
            setLoading(true);
            console.log("Usuário cadastrado:", { username, password });
            router.push("/profile"); // Redireciona para a página de perfil
        } catch (error) {
            setLoading(false);
            alert("Erro ao criar conta. Tente novamente.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <div className={styles.titletxt}>
                    <h1>Sign Up</h1>
                </div>
                <h2>Create your account!</h2>

                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        text="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        id="password"
                        type="password"
                        text="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                        }}
                    />
                    {passwordError && <p className={styles.error}>{passwordError}</p>}
                    {successMessage && <p className={styles.success}>{successMessage}</p>}

                    <Input
                        id="confirmPass"
                        type="password"
                        text="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            validateConfirmPassword(e.target.value);
                        }}
                    />
                    {confirmPasswordError && <p className={styles.error}>{confirmPasswordError}</p>}

                    <button className={styles.button} onClick={() => router.push("/signin")} type="submit" disabled={loading}>
                        {loading ? "Carregando..." : "Sign Up"}
                    </button>
                </form>

                <nav>
                    <p>
                        Do you already have an account?
                        <button className={styles.signin} onClick={() => router.push("/home")}>
                            Sign In
                        </button>
                    </p>
                </nav>
            </div>
        </div>
    );
}