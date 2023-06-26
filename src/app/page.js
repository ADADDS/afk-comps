"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Dropdown from "./components/shared/dropdown/dropdown";
import HeroGrid from "src/app/components/HeroGrid/HeroGrid.js";
import LeftPanel from "src/app/components/LeftPanel/LeftPanel.js";
import styles from "./page.module.css";
import Data from "/Users/lucianoinfanti/afk-comps/src/app/assets/Data/Data.json";
import SearchBar from "./components/Search/SearchBar/SearchBar";
import { globalStore } from "@/stores/globalStore";
import Header from "./components/Header/Header";
import TopBar from "./components/TopBar/TopBar";
import Filters from "./components/shared/Filters/Filters";

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

  const selectedFactionValues = selectedFactions.map((obj) => obj.faction);
  const selectedClassValues = selectedClasses.map((obj) => obj.class);

  return (
    <>
      <main className={styles.main}>
        <Head>
          <title>AFK Comps</title>
        </Head>
        <img
          className={styles.backgroundImage}
          src={"/Images/Background.png"}
        />

        <div className={styles.leftPanelWrapper}>
          <div className={styles.logoWrapper}>
            <div className={styles.shape} />
            <p className={styles.logoText}>
              <span className={styles.afkText}> AFK</span>COMPS
            </p>
          </div>
          <div className={styles.leftPanelInnerWrapper}>
            <LeftPanel selectedHeroes={selectedHeroes} />
          </div>
        </div>
        <div className={styles.heroGridWrapper}>
          <TopBar />
          <div className={styles.Filters}>
            <Filters />
          </div>

          <HeroGrid
            updateSelectedHeroes={updateSelectedHeroes}
            selectedFactions={selectedFactionValues}
            selectedClasses={selectedClassValues}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
