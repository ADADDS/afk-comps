import styles from "./SelectableOption.module.css";

const SelectableOption = ({
  label,
  handleClick,
  imageFolder,
  imageOptions,
}) => {
  return (
    <button onClick={handleClick} className={styles.wrapper}>
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
