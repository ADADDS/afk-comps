import styles from "./EditingPanel.module.css";
import { globalStore } from "@/stores/globalStore";
import { motion, AnimatePresence } from "framer-motion";
import GroupButton from "./GroupButton/GroupButton";
import Backdrop from "./Backdrop";

const EditingPanel = ({ handleClose }) => {
  const {
    slots,
    selectedSlot,
    setStars,
    setSignatureLevel,
    setAwakeningLevel,
    setFurnitureLevel,
    setEngravingLevel,
  } = globalStore();

  const handleStars = (stars) => {
    setStars(stars, selectedSlot);
  };

  const handleSignatureLevel = (signatureLevel) => {
    setSignatureLevel(signatureLevel, selectedSlot);
  };

  const handleAwakeningLevel = (awakeningLevel) => {
    setAwakeningLevel(awakeningLevel, selectedSlot);
  };

  const handleFurnitureLevel = (furnitureLevel) => {
    setFurnitureLevel(furnitureLevel, selectedSlot);
  };

  const handleEngravingLevel = (engravingLevel) => {
    setEngravingLevel(engravingLevel, selectedSlot);
  };

  const handleMaxOutHero = () => {
    setStars(5, selectedSlot);
    setSignatureLevel(30, selectedSlot);
    setAwakeningLevel("Ascended", selectedSlot);
    setFurnitureLevel("27/9", selectedSlot);
    setEngravingLevel(80, selectedSlot);
  };

  const handleMaxOutComposition = () => {
    Object.keys(slots).forEach((slot) => {
      setStars(5, slot);
      setSignatureLevel(30, slot);
      setAwakeningLevel("Ascended", slot);
      setFurnitureLevel("27/9", slot);
      setEngravingLevel(80, slot);
    });
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className={styles.container}
        >
          <div className={styles.Header}>
            Customizing hero
            <div className={styles.closeButtonWrapper}>
              Close
              <button className={styles.closeButton} onClick={handleClose}>
                <img src={`/Images/Icons/close.svg`} />
              </button>
            </div>
          </div>
          <div className={styles.heroInformation}>
            <img
              className={styles.avatarImg}
              src={`/Images/HeroAvatar/${slots[selectedSlot]?.name}.png`}
              width={60}
              height={60}
            />
            <div className={styles.heroNameAndDescription}>
              <div className={styles.firstRowDescription}>
                {slots[selectedSlot]?.name}
                <span className={styles.iconsWrapper}>
                  <img
                    src={`/Images/Classes/${slots[selectedSlot]?.class}.png`}
                    width={24}
                    height={24}
                  />
                  <img
                    src={`/Images/Attribute Icon/${slots[selectedSlot]?.type}.png`}
                    width={24}
                    height={24}
                  />
                </span>
              </div>
              <span>{slots[selectedSlot]?.title}</span>
            </div>
          </div>
          <GroupButton
            title={"Stars"}
            options={[0, 1, 2, 3, 4, 5]}
            handleClick={handleStars}
          />
          <GroupButton
            title={"Furniture"}
            options={["0/9", "3/9", "9/9", "27/9"]}
            handleClick={handleFurnitureLevel}
          />
          <GroupButton
            title={"Signature"}
            options={[0, 1, 10, 20, 30]}
            handleClick={handleSignatureLevel}
          />
          <GroupButton
            title={"Engraving"}
            options={[0, 30, 60, 80]}
            imageFolder={"Stars"}
            imageOptions={["Stage0", "Stage1", "Stage2", "Stage3"]}
            handleClick={handleEngravingLevel}
          />

          <div className={styles.awakeningSection}>
            Awakening Level
            <button onClick={() => handleAwakeningLevel("Elite")}>Elite</button>
            <button onClick={() => handleAwakeningLevel("ElitePlus")}>
              Elite Plus
            </button>
            <button onClick={() => handleAwakeningLevel("Legendary")}>
              Legendary Plus
            </button>
            <button onClick={() => handleAwakeningLevel("LegendaryPlus")}>
              Legendary Plus
            </button>
            <button onClick={() => handleAwakeningLevel("Mythic")}>
              Mythic
            </button>
            <button onClick={() => handleAwakeningLevel("MythicPlus")}>
              MythicPlus
            </button>
            <button onClick={() => handleAwakeningLevel("Ascended")}>
              Ascended
            </button>
          </div>

          <div className={styles.maxOutSection}>
            <button className={styles.maxOutButton} onClick={handleMaxOutHero}>
              Max out hero
            </button>
            <button
              className={styles.maxOutButton}
              onClick={handleMaxOutComposition}
            >
              Max out composition
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default EditingPanel;
