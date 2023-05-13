import styles from "./dropdown.module.css";
import { useEffect, useState } from "react";

const dropdown = ({ value, alt, options, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptions() {
    onChange(undefined);
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
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      className={styles.wrapper}
    >
      <div className={styles.content}>
        <div className={styles.label}>{name}</div>
        <div className={styles.placeholder}>
          <img
            src={`/Images/FactionIcon/${value?.label}.png`}
            alt={alt}
            width={24}
            height={24}
          />
          {value?.label}
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
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`
					${styles.option} 
					${isOptionSelected(option) ? styles.selected : ""} 
					${index === highlightedIndex ? styles.highlighted : ""}
				`}
          >
            <img
              src={`/Images/FactionIcon/${option.label}.png`}
              alt={alt}
              width={24}
              height={24}
            />
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default dropdown;
