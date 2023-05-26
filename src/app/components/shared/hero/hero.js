import styles from "./hero.module.css";
import { imageSelectionStore } from "@/stores/ImageSelectionStore";
import { useStore } from "zustand";

const Hero = ({
  heroName,
  faction,
  isSelected,
  height,
  width,
  displayBadge,
}) => {
  // const { hoveredHero, setHoveredHero, clearHoveredHero } = useStore(
  //   (state) => state
  // );

  const { hoveredHero, setHoveredHero, clearHoveredHero } =
  imageSelectionStore((state) => state);

  const state = imageSelectionStore((state) => state);


  const handleMouseEnter = () => {
    setHoveredHero(heroName);
  };

  const handleMouseLeave = () => {
    clearHoveredHero();
  };

  const isHovered = heroName === hoveredHero;

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
