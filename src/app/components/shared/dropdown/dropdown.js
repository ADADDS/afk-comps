import styles from "./dropdown.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const dropdown = ({
  multiple,
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
      multiple ? onChange([]) : onChange(undefined);
    }
  }

  function selectOption(option) {
    if (multiple) {
      if (value.some((val) => val.id === option.id)) {
        onChange(value.filter((o) => o.id !== option.id));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option.id !== value.id) onChange(option);
    }
  }

  function isOptionSelected(option) {
    return multiple
      ? value.some((val) => val.id === option.id)
      : option.id === value.id;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      className={`
			${styles.wrapper} 
			${isOpen ? styles.opened : ""} `}
    >
      <div className={styles.content}>
        <div className={styles.input}>{input}</div>
        <div className={styles.placeholder}>
          {!value.length && (
            <div
              className={styles.selectFaction}
              onClick={() => setIsOpen(!isOpen)}
            >
              Select {selectorType}
            </div>
          )}

          {multiple ? (
            value.map((v) => (
              <div
                className={styles.factionSelected}
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
              >
                {
                  <img
                    src={`/Images/${folder}/${v?.[selectorType]}.png`}
                    alt={value?.factionName}
                    width={24}
                    height={24}
                  />
                }
              </div>
            ))
          ) : (
            <img
              src={`/Images/${folder}/${value?.[selectorType]}.png`}
              alt={value?.factionName}
              width={24}
              height={24}
            />
          )}
        </div>
      </div>

      <div className={styles.buttons}>
        {/* {value.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              clearOptions();
            }}
            className={styles["clear-btn"]}
          >
           Clear <img
            src="/Images/Icons/Close.svg"
            alt="close"
            width={16}
            height={16}
          />
          </button>
        )} */}
        <button className={styles.caret}>
          <motion.img
            src="/Images/Icons/caret.svg"
            alt="chevron"
            width={24}
            height={24}
            animate={{ rotate: isOpen ? 180 : 0 }}
          />
        </button>
      </div>

      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`
			${styles.option} 
			${isOptionSelected(option) ? styles.selected : ""} 
			${index === highlightedIndex ? styles.highlighted : ""}`}
          >
            <div className={`
			${styles.listItem} 
			${isOptionSelected(option) ? styles.selected : ""} `}>
              <img
                src={`/Images/${folder}/${option?.[selectorType]}.png`}
                alt={value?.factionName}
                width={24}
                height={24}
              />
              {option[selectorType]}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default dropdown;
