import styles from "./EditingPanel.module.css";
import { globalStore } from "@/stores/globalStore";
import { motion, AnimatePresence } from "framer-motion";
import GroupButton from "./GroupButton/GroupButton";
import Backdrop from "./Backdrop";
import { useEffect, useState } from "react";

const AWAKENING_LEVELS = [
  { id: "1", level: "Elite" },
  { id: "2", level: "Elite Plus" },
  { id: "3", level: "Legendary" },
  { id: "4", level: "Legendary Plus" },
  { id: "5", level: "Mythic" },
  { id: "6", level: "Mythic Plus" },
  { id: "7", level: "Ascended" },
];

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

  const awakeningLevel = slots[selectedSlot]?.awakeningLevel;
  const starAmout = slots[selectedSlot]?.stars;

  const [isStarsActive, setIsStarsActive] = useState(false);
  const [isFurnitureActive, setIsFurnitureActive] = useState(false);
  const [isEngravingActive, setIsEngravingActive] = useState(false);
  const [isSignatureActive, setIsSignatureActive] = useState(false);
  const [isDropdownOptionSelected, setIsDropdownOptionSelected] =
    useState(false);
  const [open, setOpen] = useState(false);

  const handleDropdownClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const isAscended = awakeningLevel === "Ascended";
    const isMythicOrAbove =
      awakeningLevel === "Mythic" || awakeningLevel === "MythicPlus";

    if (isMythicOrAbove || isAscended) {
      setIsSignatureActive(true);
    } else {
      setIsSignatureActive(false);
    }

    if (isAscended) {
      setIsSignatureActive(true);
      setIsFurnitureActive(true);
      setIsStarsActive(true);
    } else {
      setIsStarsActive(false);
      setIsSignatureActive(false);
      setIsFurnitureActive(false);
    }

    if (isAscended && starAmout >= 1) {
      setIsEngravingActive(true);
    } else {
      setIsEngravingActive(false);
    }
  }, [awakeningLevel, starAmout]);

  const handleStars = (stars) => {
    setStars(stars, selectedSlot);
  };

  const handleSignatureLevel = (signatureLevel) => {
    setSignatureLevel(signatureLevel, selectedSlot);
  };

  const handleAwakeningLevel = (awakeningLevel) => {
    const sanitizedAwakeningLevel = awakeningLevel.replace(/ /g, "");

    setAwakeningLevel(sanitizedAwakeningLevel, selectedSlot);
    setIsDropdownOptionSelected(awakeningLevel);
    handleDropdownClick();
  };

  const handleFurnitureLevel = (furnitureLevel) => {
    setFurnitureLevel(furnitureLevel, selectedSlot);
  };

  const handleEngravingLevel = (engravingLevel) => {
    setEngravingLevel(engravingLevel, selectedSlot);
  };

  useEffect(() => {
    console.log("awakeningLevel:", awakeningLevel);
  }, [awakeningLevel]);

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

          <div className={styles.awakeningSection}>
            <span className={styles.awakeningSectionTitle}>
              Awakening Level
            </span>

            <div
              className={`${styles.placeholderWrapper} ${
                open ? styles.placeholderOpen : ""
              }`}
              onClick={handleDropdownClick}
            >
              {isDropdownOptionSelected
                ? slots[selectedSlot]?.awakeningLevel
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                : "Select your awakening level"}
            </div>
            <div className={styles.dropdown}>
              {open ? (
                <ul className={styles.menu}>
                  {AWAKENING_LEVELS.map((level) => (
                    <li className={styles.dropdownItem} key={level.id}>
                      <div className={styles.contentWrapper}>
                        <div className={styles[`_${level.id}`]}></div>
                        <button
                          onClick={() => handleAwakeningLevel(`${level.level}`)}
                        >
                          {level.level}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          <GroupButton
            title={"Stars"}
            isActive={isStarsActive}
            options={[0, 1, 2, 3, 4, 5]}
            handleClick={handleStars}
          />

          <GroupButton
            title={"Engraving"}
            isActive={isEngravingActive}
            options={[0, 30, 60, 80]}
            imageFolder={"Stars"}
            imageOptions={["Stage0", "Stage1", "Stage2", "Stage3"]}
            handleClick={handleEngravingLevel}
          />

          <GroupButton
            title={"Furniture"}
            isActive={isFurnitureActive}
            options={["0/9", "3/9", "9/9", "27/9"]}
            handleClick={handleFurnitureLevel}
          />
          <GroupButton
            title={"Signature"}
            isActive={isSignatureActive}
            options={[0, 1, 10, 20, 30]}
            handleClick={handleSignatureLevel}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default EditingPanel;
