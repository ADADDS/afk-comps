import Hero from "../shared/hero/hero";
import Backdrop from "./Backdrop";
import styles from "./EditingPanel.module.css";
import { imageSelectionStore } from "@/stores/ImageSelectionStore";
import { heroOrnaments } from "@/stores/heroOrnaments";

const EditingPanel = ({ handleClose }) => {
  const { selectedSlot, setSelectedSlot, removeHero, slots, hoveredHero } =
    imageSelectionStore((state) => state);

  const {
    awakeningLevel,
    engravingLevel,
    signatureLevel,
    furnitureLevel,
    starCount,
    faction,
    setEngravingLevel,
    setStarCount,
  } = heroOrnaments((state) => state);

  const selectedHero = slots[selectedSlot]; // Get the selected hero from the slots object
  console.log("Slot object:", slots); // Log the slot object

  const handleClick = (stars) => {
    setStarCount(stars);
  };

  return (
    <Backdrop onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()} className={styles.container}>
        <div className={styles.Header}>
          Editing {selectedHero ? selectedHero.name : ""}
          <Hero heroName={selectedHero.name}/>
          <button onClick={handleClose}>Close</button>
        </div>
        {selectedHero && (
          <div>
            <div>Awakening Level: {selectedHero.awakeningLevel}</div>
            <div>Engraving Level: {selectedHero.engravingLevel}</div>
            <div>Signature Level: {selectedHero.signatureLevel}</div>
          </div>
        )}
        stars
        <button onClick={() => handleClick(0)}>Star: 0</button>
        <button onClick={() => handleClick(1)}>Star: 1</button>
        <button onClick={() => handleClick(2)}>Star: 2</button>
      </div>
    </Backdrop>
  );
};

export default EditingPanel;
