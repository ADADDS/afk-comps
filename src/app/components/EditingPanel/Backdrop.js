import { motion } from "framer-motion";
import styles from "./Backdrop.module.css";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className={styles.Backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
