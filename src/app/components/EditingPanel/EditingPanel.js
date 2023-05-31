import styles from "./EditingPanel.module.css";
import { globalStore } from "@/stores/globalStore";
import { useState, useEffect } from "react";
import Backdrop from "./Backdrop";
import { useStore } from "zustand";

const EditingPanel = ({ handleClose }) => {
  const { selectedSlot, slots, setStars, setSignatureLevel } = globalStore();

  const handleClick = (stars) => {
    setStars(stars);
  };

  const handleSignatureLevel = (signatureLevel) => {
    setSignatureLevel(signatureLevel);
  };
  return (
    <Backdrop onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()} className={styles.container}>
        <div className={styles.Header}>
          <button onClick={handleClose}>Close</button>
        </div>

        <button onClick={() => handleClick(0)}>Star: 0</button>
        <button onClick={() => handleClick(1)}>Star: 1</button>
        <button onClick={() => handleClick(2)}>Star: 2</button>

        <button onClick={() => handleSignatureLevel(0)}>Signature Level: 0</button>
        <button onClick={() => handleSignatureLevel(10)}>Signature Level: 10</button>
        <button onClick={() => handleSignatureLevel(20)}>Signature Level: 20</button>
        <button onClick={() => handleSignatureLevel(30)}>Signature Level: 30</button>
        <button onClick={() => handleSignatureLevel(35)}>Signature Level: 35</button>
      </div>
    </Backdrop>
  );
};

export default EditingPanel;
