"use Client";

import FormationSelector from "./FormationSelector/FormationSelector";
import styles from "./LeftPanel.module.css";
import MaxOutButtons from "../EditingPanel/MaxOutButtons/MaxOutButtons";

const LeftPanel = ({ selectedHeroes, onHeroRemove }) => {


  return (
    <div className={styles.compContainer}>
    

      <div className={styles.FormationSelectorWrapper}>
        <div className={styles.FormationSelectorTitle}>COMP SELECTION</div>
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
