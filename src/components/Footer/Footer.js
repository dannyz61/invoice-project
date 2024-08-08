import React from "react";
import { terms } from "../../constants/terms";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.terms}>
        <p className={styles.footerHeading}>Terms & Conditions</p>
        <ol>
          <li className={styles.itemContainer}>{terms}</li>
          <li className={styles.itemContainer}>{terms}</li>
        </ol>
      </div>

      <div className={styles.signatureMainContainer}>
        <div className={styles.signatureContainer}>
          <div className={styles.signatureLineContainer}></div>
          <span>SIGNATURE</span>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div>Address</div>
        <div>Phone</div>
        <div>Email</div>
      </div>
    </div>
  );
};

export default Footer;
