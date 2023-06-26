import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Zenkai from "../Assets/Zenkai.png";
import { UserContext } from "../UserContex";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        {data ? (
          <Link className={styles.logo} to="/page" aria-label="Zenkai - Home">
            <img src={Zenkai} alt="logo" />
          </Link>
        ) : (
          <img src={Zenkai} alt="logo" />
        )}
        {data ? (
          <Link className={styles.login} to="/page">
            {data}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login/ Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
