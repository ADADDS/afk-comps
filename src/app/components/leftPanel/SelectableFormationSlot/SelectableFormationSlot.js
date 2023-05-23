import { imageSelectionStore } from "@/stores/ImageSelectionStore";
import styles from "./SelectableFormationSlot.module.css";

const SelectableFormationSlot = ({ slot }) => {
  const { selectedSlot, setSelectedSlot, setHero, removeHero, slots, hoveredHero } =
    imageSelectionStore((state) => state);

  const isSelected = selectedSlot === slot;
  const hero = slots[slot];

  const onClick = () => {
    if (hero) {
      removeHero(hero);
    } else {
      setSelectedSlot(slot);
    }
  };

  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${isSelected ? styles.selected : ""}`}
    >
      {isSelected && !hero && hoveredHero && (
        <img
          className={styles.ghostAvatar}
          src={`/Images/HeroAvatar/${hoveredHero}.png`}
          alt={hoveredHero}
          width={120}
          height={120}
        />
      )}

      {hero ? (
        <>
          <img
            className={styles.faction_badge}
            src={`/Images/Faction/${hero.faction}.png`}
          />
          <img
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
  );
};

export default SelectableFormationSlot;
