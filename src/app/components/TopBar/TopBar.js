import { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./TopBar.module.css";
import SearchBar from "../Search/SearchBar/SearchBar";
import ShareButton from "../shared/ShareButton/ShareButton";

const TopBar = () => {
  const ref = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollYProgress } = useScroll(ref);
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  useEffect(() => {
    const checkScroll = () => {
      setHasScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <motion.div ref={ref} className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.SearchBarWrapper}>
            <SearchBar />
          </div>
          <div className={styles.buttonWrapper}>
            <motion.a
              href="https://github.com/ADADDS/afk-comps"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.secondaryButton}
            >
              <img
                src={"/Images/Icons/Star.svg"}
                width={18}
                height={18}
                alt="Star icon"
              />
              Star us on Github
            </motion.a>
            <ShareButton />
          </div>
        </div>
      </motion.div>
      <motion.div style={{ opacity }} className={styles.scrolledContent}>
        {" "}
      </motion.div>
    </>
  );
};

export default TopBar;
