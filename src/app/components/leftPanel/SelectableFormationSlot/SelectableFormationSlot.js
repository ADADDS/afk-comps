import styles from "./SelectableFormationSlot.module.css";

const SelectableFormationSlot = ({ hero, onClick, isSelected }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`
        ${styles.container} 
        ${isSelected ? styles.selected : ""} `}
      >
        {hero ? (
          <>
            <img
              onClick={onClick}
              className={styles.faction_badge}
              src={`/Images/Faction/${hero.faction}.png`}
            />
            <img
              onClick={onClick}
              className={styles.avatar}
              src={`/Images/HeroAvatar/${hero.name}.png`}
              alt={hero.name}
              width={120}
              height={120}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SelectableFormationSlot;
