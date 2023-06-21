import React from "react";
import { Link } from "react-router-dom";
// import Input from "../Forms/Input";
// import Button from "../Forms/Button";
// import useForm from "../../Hooks/useForm";
// import { UserContext } from "../../UserContext";
// import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
// import stylesBtn from "../Forms/Button.module.css";
import Head from "../helper/Head";

const LoginForm = () => {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <section className="animeLeft">
            <Head title="Login" />
            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <button>Entrar</button>
            </form>
            <Link className={styles.perdeu} to="/login/perdeu">
                Perdeu a Senha?
            </Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link to="/login/criar">
                    Cadastro
                </Link>
            </div>
        </section>
    );
};

export default LoginForm;