import React from "react";
import { Link } from "react-router-dom";
import Input from "../forms/Input";
import Button from "../forms/Button";
import styles from "./LoginForm.module.css";
import stylesBtn from "../forms/Button.module.css";
import useForm from "../../Hooks/useForm";

const LoginForm = () => {
    const username = useForm(),
        password = useForm();

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <section className="animeLeft">
            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                <Button>Entrar</Button>
            </form>
            <Link className={styles.perdeu} to="/login/perdeu">
                Perdeu a Senha?
            </Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/criar">
                    Cadastro
                </Link>
            </div>
        </section>
    );
};

export default LoginForm;