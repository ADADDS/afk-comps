import { useState } from "react";
import Hero from "../shared/hero/hero";
import data from "src/app/assets/Data/Data.json";
import styles from "src/app/components/heroGrid/heroGrid.module.css";

const HeroGrid = ({ selectedFactions, selectedClasses }) => {
  const [heroList] = useState(data.Heroes);
  const filteredHeroes = heroList.filter(hero => selectedFactions.includes(hero.faction) 
  && selectedClasses.includes(hero.class));


  return (
    <>
      <p>Heroes ({filteredHeroes.length})</p>
    <div className={styles.container}>
      {filteredHeroes.map((hero) => (
        <div key={hero.id}>
          <Hero heroName={hero.name} />
        </div>
      ))}
    </div>
  </>
  );
};

export default HeroGrid;