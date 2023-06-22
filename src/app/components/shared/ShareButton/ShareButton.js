import styles from "./ShareButton.module.css";
import { globalStore } from "@/stores/globalStore";
import { useState, useEffect } from "react";

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
    <button onClick={handleShare} className={styles.primaryButton}>
      Share build <img src={"/Images/Icons/Send.svg"} />
    </button>
  );
};

export default ShareButton;
