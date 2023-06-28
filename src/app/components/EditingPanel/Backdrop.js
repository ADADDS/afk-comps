import styles from "./Backdrop.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <AnimatePresence>
      <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit ={{ opacity: 0}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={styles.Backdrop} 
          onClick={onClick}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Backdrop;
