
"use client";
import styles from "./page.module.css";
import Head from "next/head";
import Dropdown from "./components/shared/dropdown/dropdown";
import { useEffect, useMemo, useState } from "react";
import HeroGrid from "src/app/components/HeroGrid/HeroGrid.js";
import LeftPanel from "src/app/components/LeftPanel/LeftPanel.js";
import data from "src/app/assets/Data/Data.json";

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

  const classes = [
    { id: 0, class: "Mage" },
    { id: 1, class: "Ranger" },
    { id: 2, class: "Support" },
    { id: 3, class: "Tank" },
    { id: 4, class: "Warrior" },
  ];

  const [value, setValue] = useState([
    faction[0],
    faction[1],
    faction[2],
    faction[3],
    faction[4],
    faction[5],
    faction[6],
  ]);
  const [value2, setValue2] = useState([
    classes[0],
    classes[1],
    classes[2],
    classes[3],
    classes[4],
  ]);
  const [selectedOptions, setSelectedOptions] = useState(faction);
  
 

  function handleDropdownChange(selectedOptions) {
    setValue(selectedOptions);
    setSelectedOptions(selectedOptions);
  }

  // extrai só valores faction dentro do objeto selectedOptions
  let newSelectedOptions = selectedOptions.map(obj => obj.faction);


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
              onChange={handleDropdownChange}
              multiple
              input={"Faction"}
              value={value}
              folder={"Faction"}
              options={faction}
              selectorType={"faction"}
              alt={faction}
            />

            <Dropdown
              multiple
              input={"Classes"}
              value={value2}
              folder={"Classes"}
              options={classes}
              selectorType={"class"}
              alt={classes}
              onChange={(o) => setValue2(o)}
            />
          </div>
        </div>

        <HeroGrid selectedFactions={newSelectedOptions} />
      </div>
    </main>
  );
};

export default Home;
