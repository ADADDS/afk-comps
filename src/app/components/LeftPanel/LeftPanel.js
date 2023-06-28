"use Client";

import FormationSelector from "./FormationSelector/FormationSelector";
import styles from "./LeftPanel.module.css";
import MaxOutButtons from "../EditingPanel/MaxOutButtons/MaxOutButtons";
import EditingPanel from "../EditingPanel/EditingPanel";
import { editingPanelStore } from "@/stores/editingPanel";
import { motion, AnimatePresence } from "framer-motion";

const LeftPanel = ({ selectedHeroes, onHeroRemove }) => {
  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const { modalIsOpen, setModalIsOpen } = editingPanelStore();

  return (
    <div className={styles.compContainer}>
      <div className={styles.FormationSelectorWrapper}>
        <div className={styles.FormationSelectorTitle}>COMP SELECTION</div>
        <FormationSelector
          selectedHeroes={selectedHeroes}
          onHeroRemove={onHeroRemove}
        />
        {/* {modalIsOpen && (
        <div className={`${styles.modal} ${modalIsOpen ? "open" : ""}`}>
        <EditingPanel handleClose={toggleModal} />
        </div>
      )} */}
        <div className={styles.maxOutSection}>
          <MaxOutButtons />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
