"use client";

import styles from "./CompSelector.module.css";
import AddHero from "../AddHero/AddHero";

const CompSelector = ({ selectedHeroes = [], onHeroRemove }) => {

  const handleClick = (index) => {
    onHeroRemove(index);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <AddHero onClick={() => handleClick(0)} hero={selectedHeroes[0]}  />
          <AddHero onClick={() => handleClick(1)} hero={selectedHeroes[1]} />
          <AddHero onClick={() => handleClick(2)} hero={selectedHeroes[2]} />
        </div>
        <div className={styles.containerRight}>
          <AddHero onClick={() => handleClick(3)} hero={selectedHeroes[3]} />
          <AddHero onClick={() => handleClick(4)} hero={selectedHeroes[4]} />
        </div>
      </div>
    </>
  );
};

export default CompSelector;
