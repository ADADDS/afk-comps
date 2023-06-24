"use client";
import TopBar from "../TopBar/TopBar";
import ShareButton from "../shared/ShareButton/ShareButton";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Wrapper}>
      {/* <div className={styles.placeholder}></div> 
      <div className={styles.logoWrapper}>
        <div className={styles.shape} />
        <p className={styles.logoText}>
          <span className={styles.afkText}> AFK</span>COMPS
        </p>
      </div> */}
    
      <TopBar/>
    </div>
  );
};

export default Header;
