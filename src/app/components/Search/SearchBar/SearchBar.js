import { heroGridStore } from "@/stores/heroGridStore";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = heroGridStore((state) => state);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search by name"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
