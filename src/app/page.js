"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Dropdown from "./components/shared/dropdown/dropdown";
import HeroGrid from "src/app/components/HeroGrid/HeroGrid.js";
import LeftPanel from "src/app/components/LeftPanel/LeftPanel.js";
import styles from "./page.module.css";
import Data from "/Users/lucianoinfanti/afk-comps/src/app/assets/Data/Data.json";
import SearchBar from "./components/Search/SearchBar/SearchBar";

const FACTION_OPTIONS = [
  { id: 0, faction: "Celestial" },
  { id: 1, faction: "Dimensional" },
  { id: 2, faction: "Graveborn" },
  { id: 3, faction: "Hypogean" },
  { id: 4, faction: "Lightbearer" },
  { id: 5, faction: "Mauler" },
  { id: 6, faction: "Wilder" },
];

const CLASS_OPTIONS = [
  { id: 0, class: "Mage" },
  { id: 1, class: "Ranger" },
  { id: 2, class: "Support" },
  { id: 3, class: "Tank" },
  { id: 4, class: "Warrior" },
];

const Home = () => {
  const [selectedFactions, setSelectedFactions] = useState(FACTION_OPTIONS);
  const [selectedClasses, setSelectedClasses] = useState(CLASS_OPTIONS);
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  const handleFactionChange = (newSelection) => {
    setSelectedFactions(newSelection);
  };

  const handleClassChange = (newSelection) => {
    setSelectedClasses(newSelection);
  };

  const updateSelectedHeroes = (heroes) => {
    setSelectedHeroes(heroes);
  };

  const handleWordEntered = (e) => {
    if (e && e.target && e.target.value) {
      setWordEntered(e.target.value);
    }
  };
  

  const selectedFactionValues = selectedFactions.map((obj) => obj.faction);
  const selectedClassValues = selectedClasses.map((obj) => obj.class);

  return (
    <main className={styles.main}>
      <Head>
        <title>AFK Comps</title>
      </Head>

      <div className={styles.leftPanelWrapper}>
        <LeftPanel selectedHeroes={selectedHeroes} />
      </div>

      <div className={styles.heroGridWrapper}>
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <SearchBar placeholder="Search for a hero" data={Data} />
          </div>

          <div className={styles.dropdown}>
            <Dropdown
              multiple
              onChange={handleFactionChange}
              input="Faction"
              value={selectedFactions}
              folder="Faction"
              options={FACTION_OPTIONS}
              selectorType="faction"
              alt={FACTION_OPTIONS}
            />

            <Dropdown
              multiple
              onChange={handleClassChange}
              input="Classes"
              folder="Classes"
              value={selectedClasses}
              options={CLASS_OPTIONS}
              selectorType="class"
              alt={CLASS_OPTIONS}
            />
            <Dropdown
              multiple
              onChange={handleClassChange}
              input="Attribute"
              folder="Classes"
              value={selectedClasses}
              options={CLASS_OPTIONS}
              selectorType="class"
              alt={CLASS_OPTIONS}
            />
          </div>
          <HeroGrid
            updateSelectedHeroes={updateSelectedHeroes}
            selectedFactions={selectedFactionValues}
            selectedClasses={selectedClassValues}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
