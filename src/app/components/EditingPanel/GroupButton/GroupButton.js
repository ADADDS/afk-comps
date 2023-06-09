import styles from "./GroupButton.module.css";
import SelectableOption from "../SelectableOption/SelectableOption";

const GroupButton = ({
  isActive,
  title,
  options,
  handleClick,
  imageFolder,
  imageOptions,
}) => {
  return (
    <>
      <div className={styles.sectionTitle}>{title}</div>
      <div className={styles.optionsWrapper}>
        {options.map((option, index) => {
          return (
            <SelectableOption
              isActive={isActive}
              key={index}
              label={option}
              handleClick={() => handleClick(option)}
              imageFolder={imageFolder}
              imageOptions={imageOptions?.[index]}
            />
          );
        })}
      </div>
    </>
  );
};

export default GroupButton;
