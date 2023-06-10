import styles from "./hero.module.css";
import { globalStore } from "@/stores/globalStore";

const Hero = ({ heroName, faction, height, width, displayBadge }) => {
  const { hoveredHero, setHoveredHero, clearHoveredHero } = globalStore(
    (state) => state
  );

  const handleMouseEnter = () => {
    setHoveredHero(heroName);
  };

  const handleMouseLeave = () => {
    clearHoveredHero();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.container}`}
    >
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
