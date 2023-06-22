"use client";
import ShareButton from "../shared/ShareButton/ShareButton";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.placeholder}></div> 
      <div className={styles.logoWrapper}>
        <div className={styles.shape} />
        <p className={styles.logoText}>
          <span className={styles.afkText}> AFK</span>COMPS
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.secondaryButton}>
          <img src={"/Images/Icons/Star.svg"} />
          Star us on Github
        </button>
        <ShareButton />
      </div>
    </div>
  );
};

export default Header;
