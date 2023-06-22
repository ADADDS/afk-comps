import { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./TopBar.module.css";
import SearchBar from "../Search/SearchBar/SearchBar";
import ShareButton from "../shared/ShareButton/ShareButton";

const TopBar = () => {
  const ref = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollYProgress } = useScroll(ref);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  useEffect(() => {
    const checkScroll = () => {
      setHasScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={styles.wrapper}
      style={hasScrolled ? { opacity } : { opacity: 0 }}
    >
      <div className={styles.SearchBarWrapper}>
        <SearchBar />
      </div>
      <div className={styles.ShareButtonWrapper}>
        <ShareButton />
      </div>
    </motion.div>
  );
};

export default TopBar;
