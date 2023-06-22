import styles from "./SelectableOption.module.css";

const SelectableOption = ({ label, handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.wrapper}>
      {label}
    </button>
  );
};

export default SelectableOption;
