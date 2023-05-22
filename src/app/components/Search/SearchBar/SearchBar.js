import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import Hero from "../../shared/hero/hero";
const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const transformData = Object.values(data.Heroes).filter(
    (hero) => hero.type === "Strength"
  );

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = transformData.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchInput}>
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
        {filteredData.slice(0, 15).map((value, key) => {
          const index = value.name
            .toLowerCase()
            .indexOf(wordEntered.toLowerCase());
          const prefix = value.name.slice(0, index);
          const match = value.name.slice(index, index + wordEntered.length);
          const suffix = value.name.slice(index + wordEntered.length);
          return (
            <div key={key}>
               <Hero heroName={value.name}  height={30} width={39} displayBadge={false}/>

              <p>
                {prefix}
                <strong>{match}</strong>
                {suffix}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchBar;
