import AddHero from "./AddHero/AddHero";
import CompSelector from "./CompSelector/CompSelector";
import styles from "./LeftPanel.module.css";

const LeftPanel = ({ selectedHeroes, onHeroRemove }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <div className={styles.block}></div>
          <span>Comps</span>
        </div>
      </div>
      <div className={styles.compContainer}>
        <CompSelector
          selectedHeroes={selectedHeroes}
          onHeroRemove={onHeroRemove}
        />
      </div>

      {/* 
		{selectedHero && <div>Heroi selecionado: {selectedHero.name}</div>} 
		<AddHero heroName={selectedHero?.name} faction={selectedHero?.faction}/> */}
    </div>
  );
};

export default LeftPanel;
