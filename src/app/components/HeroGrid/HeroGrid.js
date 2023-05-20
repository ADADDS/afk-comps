"use client";
import { useState, useEffect } from "react";
import Hero from "../shared/hero/hero";
import data from "src/app/assets/Data/Data.json";
import styles from "src/app/components/heroGrid/heroGrid.module.css";

const HeroGrid = ({ updateSelectedHeroes, selectedFactions, selectedClasses }) => {
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  const HERO_LIST = data.Heroes;
  const filteredHeroes = HERO_LIST.filter(
    (hero) =>
      selectedFactions.includes(hero.faction) &&
      selectedClasses.includes(hero.class)
  );

  const handleHeroClick = (hero) => {
    const isHeroSelected = selectedHeroes.find(
      (selectedHero) => selectedHero.id === hero.id
    );
    const canSelectMoreHeroes = selectedHeroes.length < 5;

    if (isHeroSelected) {
      setSelectedHeroes(
        selectedHeroes.filter((selectedHero) => selectedHero.id !== hero.id)
      );
    } else if (canSelectMoreHeroes) {
      setSelectedHeroes([...selectedHeroes, hero]);
    }
  };

  // isso aqui é oq atualiza o componente FormationSelector :thi 
  useEffect(() => {
    updateSelectedHeroes(selectedHeroes);
  }, [selectedHeroes, updateSelectedHeroes]);

  return (
    <>
      <span className={styles.title}>Heroes ({filteredHeroes.length})</span>
      <div className={styles.container}>
        {filteredHeroes.map((hero) => (
          <div
            className={`${styles.hero} ${
              selectedHeroes.find((h) => h.id === hero.id)
                ? styles.selected
                : ""
            }`}
            key={hero.id}
            onClick={() => handleHeroClick(hero)}
          >
            <Hero heroName={hero.name} faction={hero.faction} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroGrid;
