"use client";

import styles from "./page.module.css";
import Head from "next/head";
import Dropdown from "./components/shared/dropdown/dropdown";
import { useState } from "react";

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

  const [value, setValue] = useState([faction[0], faction[1], faction[2], faction[3], faction[4], faction[5], faction[6]]);
  const [value2, setValue2] = useState([classes[0], classes[1], classes[2], classes[3], classes[4]]);

  return (
    <main className={styles.main}>
      <Head>
        <title>AFK Comps</title>
      </Head>

      <div className={styles.container}>
        <Dropdown
          multiple
          input={"Faction"}
          value={value}
          folder={"Faction"}
          options={faction}
          selectorType={"faction"}
          alt={faction}
          onChange={(o) => setValue(o)}
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
    </main>
  );
};

export default Home;
