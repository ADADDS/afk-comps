"use Client";

import EditingPanel from "../EditingPanel/EditingPanel";
import FormationSelector from "./FormationSelector/FormationSelector";
import styles from "./LeftPanel.module.css";
import { useState, useEffect } from "react";
import { editingPanelStore } from "@/stores/editingPanel";
import { motion, AnimatePresence } from "framer-motion";
import { globalStore } from "@/stores/globalStore";

const LeftPanel = ({ selectedHeroes, onHeroRemove }) => {
  const { selectedSlot } = globalStore();
  const { modalIsOpen, setModalIsOpen } = editingPanelStore();

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <div>
      <div className={styles.wrapper} />
      <div className={styles.compContainer}>
        <div className={styles.sectionTitle}>COMP SELECTOR</div>


        <AnimatePresence>
          {modalIsOpen && (
            <div className={styles.wrapper}>
              <motion.div
                key="panel"
                initial={{ x: "100vw" }}
                animate={{ x: "calc(100vw - 33vw)" }}
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
      </div>
    </div>
  );
};

export default LeftPanel;
