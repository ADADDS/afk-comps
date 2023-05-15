import { useEffect, useMemo, useState } from "react";
import Hero from "../shared/hero/hero";
import data from "src/app/assets/Data/Data.json";
import styles from "src/app/components/heroGrid/heroGrid.module.css";

const HeroGrid = ({ selectedFactions }) => {
  const [heroList] = useState(data.Heroes);
  const [selectedFaction] = useState(selectedFactions);


// heroList.forEach(obj => {
//   if (selectedFaction.includes(obj.faction)){
//     console.log("hero")
//   }
// })

let filteredHeroList = heroList.filter(obj => selectedFaction.includes(obj.faction));

  // just for debugging

  useEffect(() => {
    console.log("filteredHeroList (heroGrid.js):", filteredHeroList);
  }, [heroList]);

  useEffect(() => {
    console.log("getFilteredList (heroGrid.js):", heroList);
  }, [heroList]);

  useEffect(() => {
    console.log("selectedFactions heroGrid.js:", selectedFactions);
  }, [selectedFactions]);

  return (
    
    <>
    <div className={styles.container}>
      {heroList.map((hero) => (
        selectedFactions.includes(hero.faction) && 
        <div key={hero.id}>
          <Hero heroName={hero.name} />
        </div>
      ))}
    </div>
  </>
  );
};

export default HeroGrid;

// if(factions.includes(hero.faction)){
