"use Client";

import EditingPanel from "../EditingPanel/EditingPanel";
import FormationSelector from "./FormationSelector/FormationSelector";
import styles from "./LeftPanel.module.css";
import { useState, useEffect } from "react";
import { editingPanelStore } from "@/stores/editingPanel";
import { motion, AnimatePresence } from "framer-motion";
import { globalStore } from "@/stores/globalStore";
import MaxOutButtons from "../EditingPanel/MaxOutButtons/MaxOutButtons";

const LeftPanel = ({ selectedHeroes, onHeroRemove }) => {
  const { modalIsOpen, setModalIsOpen } = editingPanelStore();

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <div className={styles.compContainer}>
      <AnimatePresence>
        {modalIsOpen && (
          <div className={styles.wrapper}>
            <motion.div
              key="panel"
              initial={{ x: "100vw" }}
              animate={{ x: "calc(100vw - 600px)" }}
              transition={{ ease: "easeInOut", duration: 0.35 }}
              exit={{ x: "100vw" }}
            >
              <EditingPanel handleClose={toggleModal} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className={styles.FormationSelectorWrapper}>
        <FormationSelector
          selectedHeroes={selectedHeroes}
          onHeroRemove={onHeroRemove}
        />
      </div>

      <div className={styles.maxOutSection}>
        <MaxOutButtons />
      </div>
    </div>
  );
};

export default LeftPanel;
