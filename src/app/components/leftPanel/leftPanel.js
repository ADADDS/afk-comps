"use Client";

import EditingPanel from "../EditingPanel/EditingPanel";
import FormationSelector from "./FormationSelector/FormationSelector";
import styles from "./LeftPanel.module.css";
import { useState, useEffect } from "react";

const LeftPanel = ({ selectedHeroes, onHeroRemove }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div>
      <div className={styles.wrapper} />
      <div className={styles.compContainer}>
        <div className={styles.sectionTitle}>COMP SELECTOR</div>
        <button onClick={toggleModal}>Edit Heroes</button>

        <div className={styles.EditingPanelWrapper}>
          {modalOpen && (
            <EditingPanel modalOpen={modalOpen} handleClose={toggleModal} />
          )}
          <div className={styles.FormationSelectorWrapper}>
            <FormationSelector
              selectedHeroes={selectedHeroes}
              onHeroRemove={onHeroRemove}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
