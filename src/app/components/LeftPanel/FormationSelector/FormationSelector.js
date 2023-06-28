"use client";

import styles from "./FormationSelector.module.css";
import SelectableFormationSlot from "../SelectableFormationSlot/SelectableFormationSlot";

const FormationSelector = ({}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <SelectableFormationSlot slot={1} />
          <SelectableFormationSlot slot={2} />
          <SelectableFormationSlot slot={3} />
        </div>
        <div className={styles.containerRight}>
          <SelectableFormationSlot slot={4} />
          <SelectableFormationSlot slot={5} />
        </div>
      </div>
    </>
  );
};

export default FormationSelector;
