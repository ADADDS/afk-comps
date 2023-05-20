import SelectableFormationSlot from "./SelectableFormationSlot/SelectableFormationSlot";
import FormationSelector from "./FormationSelector/FormationSelector";
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
        <FormationSelector
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
