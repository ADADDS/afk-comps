import styles from "./hero.module.css";

const Hero = ({
  heroName,
  faction,
  isSelected,
  height,
  width,
  displayBadge,
}) => {
  return (
    <div className={`${styles.container} ${isSelected ? styles.selected : ""}`}>
      {displayBadge && (
        <img
          className={styles.faction_badge}
          src={`/Images/Faction/${faction}.png`}
        />
      )}

      <img
        className={styles.avatar}
        src={`/Images/HeroAvatar/${heroName}.png`}
        alt={heroName}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Hero;
