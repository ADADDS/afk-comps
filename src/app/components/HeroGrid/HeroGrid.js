import { useEffect, useMemo, useState } from "react";
import Hero from '../shared/hero/hero'
import data from "src/app/assets/Data/Data.json";
import styles from "src/app/components/heroGrid/heroGrid.module.css"

const HeroGrid = ({ selectedFactions }) => {

  const [heroList] = useState(data.Heroes);
  const [selectedFaction, setSelectedFaction] = useState(selectedFactions);

  function getFilteredList() {
    if (!selectedFactions || selectedFactions.length === 0) {
      return heroList;
    }
    return heroList.filter((hero) => selectedFactions.includes(hero.faction));
  }

  var filteredList = useMemo(getFilteredList, [selectedFactions, heroList]);

  // function updateSelectedFaction() {
  //   setSelectedFaction(selectedFactions);
  // }


useEffect(() => {
  setSelectedFaction(selectedFactions);
}, [selectedFactions]);

  // just for debugging 
  useEffect(() => {
    console.log("Filtered Listin within HeroGrid:", getFilteredList());
  }, [getFilteredList()]);


  useEffect(() => {
    console.log("Filtered Factions passed as prop:", selectedFactions);
  }, [selectedFactions]);


  return (
	<div className={styles.container}>

{heroList.map((hero, index) => (
          <Hero heroName={[hero.name]}  key={index}  />
        ))} 

   
		{data.Heroes.map((hero) => {
      if(hero.faction == selectedFactions.factions){
        return(
          <div key={hero.id}>
          <Hero heroName={[hero.name]} />
        </div>
        )

      } return null; 
        
})} 
	</div>
  )
}

export default HeroGrid

// if(factions.includes(hero.faction)){




