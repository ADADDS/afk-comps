import { heroGridStore } from "@/stores/heroGridStore";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = heroGridStore((state) => state);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
  };

  return (
    <div className={styles.inputWrapper}>
      <img src={"/Images/Icons/Search.svg"} className={styles.inputIcon} />
      <input
        className={styles.input}
        type="text"
        placeholder="Search for hero..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
