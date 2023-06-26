import { useEffect } from "react";
import FilterUnit from "./FilterUnit/FilterUnit";
import styles from "./Filters.module.css";
import { heroGridStore } from "@/stores/heroGridStore";

const FACTION_OPTIONS = [
  { id: 0, faction: "Celestial" },
  { id: 1, faction: "Dimensional" },
  { id: 2, faction: "Graveborn" },
  { id: 3, faction: "Hypogean" },
  { id: 4, faction: "Lightbearer" },
  { id: 5, faction: "Mauler" },
  { id: 6, faction: "Wilder" },
];

const Filters = () => {
  const { selectedFaction, setSelectedFaction, heros } = heroGridStore(
    (state) => state
  );

  useEffect(() => {
    console.log(selectedFaction);
  }, [selectedFaction]);

  const allFactions = FACTION_OPTIONS.map((option) => option.faction);

  function countHeroesOfFaction(faction) {
    return heros.filter((hero) => hero.faction === faction).length;
  }

  const handleFilterClick = (faction) => {
    if (faction == selectedFaction) {
      setSelectedFaction(allFactions);
    } else {
      setSelectedFaction([faction]);
    }
  };

  return (
    <>
      <div className={styles.title}>Factions</div>
      <div className={styles.factionsFilterWrapper}>
        {FACTION_OPTIONS.map((option) => (
          <FilterUnit
            key={option.id}
            faction={option.faction}
            onFilterClick={() => handleFilterClick(option.faction)}
            quantity={countHeroesOfFaction(option.faction)}
          />
        ))}
      </div>
    </>
  );
};

export default Filters;
