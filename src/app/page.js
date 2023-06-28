"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Dropdown from "./components/shared/dropdown/dropdown";
import HeroGrid from "./components/HeroGrid/HeroGrid.js";

import styles from "./page.module.css";
import SearchBar from "./components/Search/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import TopBar from "./components/TopBar/TopBar";
import Filters from "./components/shared/Filters/Filters";
import EditingPanel from "./components/EditingPanel/EditingPanel";
import { editingPanelStore } from "@/stores/editingPanel";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./components/EditingPanel/Backdrop";
import LeftPanel from "./components/LeftPanel/LeftPanel";

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
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const { modalIsOpen, setModalIsOpen } = editingPanelStore();

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const handleFactionChange = (newSelection) => {
    setSelectedFactions(newSelection);
  };

  const updateSelectedHeroes = (heroes) => {
    setSelectedHeroes(heroes);
  };

  const selectedFactionValues = selectedFactions.map((obj) => obj.faction);

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

          <div className={styles.LeftPanelPlaceholder}></div>
          <AnimatePresence>
            {modalIsOpen && (
              <motion.div
                className={styles.modal}
                initial={{ x: "-600px" }}
                animate={{ x: 0 }}
                exit={{ x: "-600px" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <EditingPanel handleClose={toggleModal} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {modalIsOpen && (
          <div className={styles.backdrop}>
            <Backdrop />
          </div>
        )}

        <div className={styles.heroGridWrapper}>
          <TopBar />
          <div className={styles.Filters}>
            <Filters />
          </div>

          <HeroGrid
            updateSelectedHeroes={updateSelectedHeroes}
            selectedFactions={selectedFactionValues}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
