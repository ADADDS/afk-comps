"use client";

import styles from "./page.module.css";
import Head from "next/head";
import Dropdown from "./components/shared/dropdown/dropdown";
import { useState } from "react";

const Home = () => {
  const options = [
    {
      label: "Celestial",
      src: "/src/app/assets/FactionIcon/Celestial.png",
      value: 1,
    },
    {
      label: "Dimensional",
      src: "/src/app/assets/FactionIcon/Dimensional.png",
      value: 2,
    },
    {
      label: "Graveborn",
      src: "/src/app/assets/FactionIcon/Graveborn.png",
      value: 3,
    },
    {
      label: "Hypogean",
      src: "/src/app/assets/FactionIcon/Hypogean.png",
      value: 4,
    },
    {
      label: "Lightbearer",
      src: "/src/app/assets/FactionIcon/Lighbearer.png",
      value: 5,
    },
    {
      label: "Mauler",
      src: "/src/app/assets/FactionIcon/Mauler.png",
      value: 6,
    },
    {
      label: "Wilder",
      src: "/src/app/assets/FactionIcon/Wilder.png",
      value: 7,
    },
  ];

  const [value, setValue] = useState(options[0]);

  return (
    <main className={styles.main}>
      <Head>
        <title>AFK Comps</title>
      </Head>

      <Dropdown
        multiple
        name={"Faction"}
        value={value}
        options={options}
        alt={"label"}
        onChange={(o) => setValue(o)}
      />
    </main>
  );
};

export default Home;
