"use client";

import styles from "./page.module.css";
import Head from "next/head";
import Dropdown from "./components/shared/dropdown/dropdown";
import { useEffect, useState } from "react";
import HeroGrid from "src/app/components/HeroGrid/HeroGrid.js";
import LeftPanel from "src/app/components/LeftPanel/LeftPanel.js";

const Home = () => {
  const faction = [
    { id: 0, faction: "Celestial" },
    { id: 1, faction: "Dimensional" },
    { id: 2, faction: "Graveborn" },
    { id: 3, faction: "Hypogean" },
    { id: 4, faction: "Lightbearer" },
    { id: 5, faction: "Mauler" },
    { id: 6, faction: "Wilder" },
  ];

  const heroClass = [
    { id: 0, class: "Mage" },
    { id: 1, class: "Ranger" },
    { id: 2, class: "Support" },
    { id: 3, class: "Tank" },
    { id: 4, class: "Warrior" },
  ];

  const [factionOptions, setFactionOptions] = useState([
    faction[0],
    faction[1],
    faction[2],
    faction[3],
    faction[4],
    faction[5],
    faction[6],
  ]);

  const [classOptions, setClassOptions] = useState([
    heroClass[0],
    heroClass[1],
    heroClass[2],
    heroClass[3],
    heroClass[4],
  ]);
  const [selectedOptions, setSelectedOptions] = useState(faction);
  const [selectedClasses, setSelectedClasses] = useState(heroClass);

  function handleFactionDropdownChange(selectedOptions) {
    setSelectedOptions(selectedOptions);
  }

  function handleClassDropdownChange(selectedClasses) {
    setSelectedClasses(selectedClasses);
  }

  // extrai só valores dentro do objeto
  let selectedFactions = selectedOptions.map((obj) => obj.faction);
  let Classes = selectedClasses.map((obj) => obj.class);

  return (
    <main className={styles.main}>
      <Head>
        <title>AFK Comps</title>
      </Head>

      <div className={styles.leftPanelWrapper}>
        <LeftPanel />
      </div>

      <div className={styles.heroGridWrapper}>
        <div className={styles.container}>
          <div className={styles.dropdown}>
            <Dropdown
              multiple
              onChange={handleFactionDropdownChange}
              input={"Faction"}
              value={factionOptions}
              folder={"Faction"}
              options={faction}
              selectorType={"faction"}
              alt={faction}
            />

            <Dropdown
              multiple
              onChange={handleClassDropdownChange}
              input={"Classes"}
              folder={"Classes"}
              value={classOptions}
              options={heroClass}
              selectorType={"class"}
              alt={heroClass}
            />
          </div>
        </div>

        <HeroGrid
          selectedFactions={selectedFactions}
          selectedClasses={Classes}
        />
      </div>
    </main>
  );
};

export default Home;