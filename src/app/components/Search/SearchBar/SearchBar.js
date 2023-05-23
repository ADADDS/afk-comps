import { heroGridStore } from "@/stores/heroGridStore";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = heroGridStore((state) => state);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue); // Update searchQuery in store
  };

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
