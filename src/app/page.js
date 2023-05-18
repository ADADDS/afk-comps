"use client";

import { useState } from "react";
import Head from "next/head";
import Dropdown from "./components/shared/dropdown/dropdown";
import HeroGrid from "src/app/components/HeroGrid/HeroGrid.js";
import LeftPanel from "src/app/components/LeftPanel/LeftPanel.js";
import styles from "./page.module.css";

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

  const handleStatusChange = (heroes) => {
    setSelectedHeroes(heroes);
  };

  const handleHeroRemove = (index) => {
    setSelectedHeroes(
      selectedHeroes.map((hero, i) => (i === index ? null : hero))
    );
  };

  const selectedFactionValues = selectedFactions.map((obj) => obj.faction);
  const selectedClassValues = selectedClasses.map((obj) => obj.class);

  return (
    <main className={styles.main}>
      <Head>
        <title>AFK Comps</title>
      </Head>

      <div className={styles.leftPanelWrapper}>
        <LeftPanel
          selectedHeroes={selectedHeroes}
          onHeroRemove={handleHeroRemove}
        />
      </div>

      <div className={styles.heroGridWrapper}>
        <div className={styles.container}>
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
            onStatusChange={handleStatusChange}
            selectedFactions={selectedFactionValues}
            selectedClasses={selectedClassValues}
            selectedHeroes={selectedHeroes}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
