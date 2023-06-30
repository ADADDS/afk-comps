import styles from "./SelectableOption.module.css";

const SelectableOption = ({
  label,
  handleClick,
  imageFolder,
  imageOptions,
  isActive,
}) => {
  const handleClickIfActive = () => {
    if (isActive) {
      handleClick();
    }
  };
  return (
    <button
      onClick={handleClickIfActive}
      className={`${styles.wrapper}  ${!isActive ? styles.notActive : ""} `}
    >
      {label}
      {imageOptions && (
        <img
          src={`/Images/${imageFolder}/${imageOptions}.png`}
          width={18}
          height={18}
        />
      )}
    </button>
  );
};

export default SelectableOption;
