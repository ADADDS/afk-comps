import { useState, useEffect } from "react";
import styles from "./FilterUnit.module.css";
import { heroGridStore } from "@/stores/heroGridStore";

const FilterUnit = ({ faction, quantity, onFilterClick }) => {
  const { selectedFaction } = heroGridStore((state) => state);
  const [isActivated, setIsActivated] = useState(false);

  const getFactionClassName = () => {
    let activation;
    if (selectedFaction.length > 1) {
      activation = styles.active;
    } else if (selectedFaction.includes(faction)) {
      activation = styles.activeFilter;
    } else {
      activation = styles.deactivated;
    }
    return `${styles.factionName} ${activation}`;
  };

  useEffect(() => {
    if (!selectedFaction.includes(faction)) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  }, [selectedFaction, faction]);

  return (
    <button className={styles.filterUnitWrapper} onClick={onFilterClick}>
      <div className={styles.factionAvatar}>
        <img src={`/Images/Faction/${faction}.png`} />{" "}
      </div>

      <div className={getFactionClassName()}>
        {isActivated && <div className={styles.striketrough}></div>}
        {faction}
      </div>
      <div className={styles.quantityHeroesinFactionWrapper}>{quantity}</div>
    </button>
  );
};

export default FilterUnit;
