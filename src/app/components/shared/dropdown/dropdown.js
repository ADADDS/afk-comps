import styles from "./dropdown.module.css";
import { useEffect, useState } from "react";

const dropdown = ({
  value,
  options,
  folder,
  selectorType,
  input,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptions() {
    if (onChange) {
      onChange(undefined);
    }
  }

  function selectOption(option) {
    if (option !== value) onChange(option);
  }

  function isOptionSelected(option) {
    return option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)} //not working
      onClick={() => setIsOpen(!isOpen)}
      className={styles.wrapper}
    >
      <div className={styles.content}>
        <div className={styles.label}>{input}</div>
        <div className={styles.placeholder}>
          {onChange ? ( //fix this conditional rendering
            <img
              src={`/Images/${folder}/${value?.[selectorType]}.png`}
              alt={value?.factionName}
              width={24}
              height={24}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles["clear-btn"]}
        >
          &times;
        </button>
        <button className={styles.caret}>↓</button>
      </div>

      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
              console.log(Object.values(value)[index]); // TA ERRADO SEI LA PQ
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={index}
            className={`
					${styles.option} 
					${isOptionSelected(option) ? styles.selected : ""} 
					${index === highlightedIndex ? styles.highlighted : ""}
				`}
          >
            <img
              src={`/Images/${folder}/${option?.[selectorType]}.png`}
              alt={value?.factionName}
              width={24}
              height={24}
            />
            {option[selectorType]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default dropdown;
