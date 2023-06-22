import styles from "./Tooltip.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Tooltip = ({ text }) => {
  return (
    <>

      <div 
	  className={styles.container}>{text}</div>
    </>
  );
};

export default Tooltip;
