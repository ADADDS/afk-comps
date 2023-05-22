"use client";
import { imageSelectionStore } from "@/stores/ImageSelectionStore";
import { useState, useEffect } from "react";
import Hero from "../shared/hero/hero";
import data from "src/app/assets/Data/Data.json";
import styles from "src/app/components/heroGrid/heroGrid.module.css";

const HeroGrid = ({ selectedFactions, selectedClasses }) => {
  const { selectedSlot, removeHero, slots, setHero } =
    imageSelectionStore((state) => state);

  const HERO_LIST = data.Heroes;
  const filteredHeroes = HERO_LIST.filter(
    (hero) =>
      selectedFactions.includes(hero.faction) &&
      selectedClasses.includes(hero.class)
    //incluir aqui resultado do searchbar
  );

  const handleHeroClick = (hero) => {
    const existingSlot = Object.entries(slots).find(
      (slot) => slot[1].id === hero.id
    );
    if (existingSlot) {
      return removeHero(hero);
    }
    if (selectedSlot) {
      setHero(hero);
    }
  };

  return (
    <>
      <span className={styles.title}>Heroes ({filteredHeroes.length})</span>
      <div className={styles.container}>
        {filteredHeroes.map((hero) => {
          return (
            <div
              className={`${styles.hero} ${
                Object.values(slots).find((h) => h?.id === hero.id)
                  ? styles.selected
                  : ""
              }`}
              key={hero.id}
              onClick={() => handleHeroClick(hero)}
            >
              <Hero heroName={hero.name} faction={hero.faction} displayBadge />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroGrid;
