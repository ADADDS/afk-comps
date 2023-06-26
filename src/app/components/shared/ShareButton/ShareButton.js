import styles from "./ShareButton.module.css";
import { globalStore } from "@/stores/globalStore";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ShareButton = () => {
  //URL serialization and deserialization
  const { deserializeState, serializeState } = globalStore((state) => state);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serializedState = urlParams.get("state");

    if (serializedState) {
      deserializeState(serializedState);
    }
  }, [deserializeState]);

  const handleShare = () => {
    const serializedState = serializeState();
    const url =
      window.location.origin +
      window.location.pathname +
      "?state=" +
      serializedState;
    navigator.clipboard.writeText(url);
  };

  return (
    <motion.button
      // whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleShare}
      className={styles.primaryButton}
    >
      Share build{" "}
      <span className={styles.IconWrapper}>
        <img
          className={styles.Icon}
          src={"/Images/Icons/Send.svg"}
          width={18}
          height={18}
        />
      </span>
    </motion.button>
  );
};

export default ShareButton;
