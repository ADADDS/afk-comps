'use client'

import { useState } from "react";
import Hero from "../shared/hero/hero";
import data from "src/app/assets/Data/Data.json";
import styles from "src/app/components/heroGrid/heroGrid.module.css";

const HeroGrid = ({ selectedFactions, selectedClasses }) => {

  const HERO_LIST = data.Heroes;
  const filteredHeroes = HERO_LIST.filter(hero => selectedFactions.includes(hero.faction) 
  && selectedClasses.includes(hero.class));


  return (
    <>
      <span className={styles.title}>Heroes ({filteredHeroes.length})</span>
    <div className={styles.container}>
      {filteredHeroes.map((hero) => (
        <div key={hero.id}>
          <Hero className={styles.hero} heroName={hero.name} faction={hero.faction} />
        </div>
      ))}
    </div>
  </>
  );
};

export default HeroGrid;