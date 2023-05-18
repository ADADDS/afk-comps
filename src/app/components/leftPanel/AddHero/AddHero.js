import styles from "./AddHero.module.css";

const AddHero = ({ hero, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`
        ${styles.container} 
        ${hero ? styles.selected : ""} `}
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

export default AddHero;
