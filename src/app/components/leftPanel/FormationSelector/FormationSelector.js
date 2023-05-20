"use client";

import { useState } from "react";

import styles from "./FormationSelector.module.css";
import SelectableFormationSlot from "../SelectableFormationSlot/SelectableFormationSlot";

const FormationSelector = ({ selectedHeroes = [], FormationSlotClicked }) => {
  const [isFormationSlotSelected, setIsFormationSlotSelected] = useState(false);

  function onClick(hero) {
    // passar no onClick alguma coisa pra que o <SelectableFormationSlot/>
    // saiba se tá selecionado ou nao pra renderizar diferente
    // preciso saber se tá selected E empty ou selected E tem hero
    // selected E hero -> apagar o hero
    // selected E empty -> tá selecionado, o próximo clicado em <HeroGrid/> adiciona
    // IMPORTANTE: preciso ver o id do <SelectableFormationSlot/> selecionado e isso vai ser igual ao index
    // que vou passar no array. assim o Selectable 2 vai passar só pra posição 2.
    // entao possivelmente preciso de tipo onClick={handleClick(1)} e esse 1 indica o index
    // quero passar selectedHeroes[0] === index do <SelectableFormationSlot/> só
    // se ele tá selecionado
  }

  function selectsFormationSlot() {
    setIsFormationSlotSelected(!isFormationSlotSelected);
  };

  function handleSelectedHeroForFormationSlot(index) {
    if (isFormationSlotSelected) {
      return selectedHeroes[index];
    } else {
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <SelectableFormationSlot
          isSelected={selectsFormationSlot}
            onClick={() => {
              handleSelectedHeroForFormationSlot();
            }}
            hero={selectedHeroes[0]}
          />
          <SelectableFormationSlot
            onClick={() => {
              setIsFormationSlotSelected(!isFormationSlotSelected);
              handleSelectedHeroForFormationSlot(1);
            }}
            hero={selectedHeroes[1]}
          />
          <SelectableFormationSlot
            onClick={() => {
              setIsFormationSlotSelected(!isFormationSlotSelected);
              handleSelectedHeroForFormationSlot(2);
            }}
            hero={selectedHeroes[2]}
          />
        </div>
        <div className={styles.containerRight}>
          <SelectableFormationSlot
            onClick={() => {
              setIsFormationSlotSelected(!isFormationSlotSelected);
              handleSelectedHeroForFormationSlot(3);
            }}
            hero={selectedHeroes[3]}
          />
          <SelectableFormationSlot
            onClick={() => {
              setIsFormationSlotSelected(!isFormationSlotSelected);
              handleSelectedHeroForFormationSlot(4);
            }}
            hero={selectedHeroes[4]}
          />
        </div>
      </div>
    </>
  );
};

export default FormationSelector;
