import React from "react";
import styles from "./Footer.module.css";
// import { ReactComponent as Zenkai} from "../Assets/zenkai-footer.svg";

const Footer = (props) => {
  return <footer className={styles.footer}>
    {/* <Zenkai /> */}
    <p>Zenkai. Alguns direitos reservados.</p>
  </footer>;
};

export default Footer;