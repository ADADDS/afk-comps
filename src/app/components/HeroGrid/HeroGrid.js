import React from 'react'
import Hero from '../shared/hero/hero'
import data from "src/app/assets/Data/Data.json";
import styles from "src/app/components/heroGrid/heroGrid.module.css"

const HeroGrid = ({heroes}) => {
  return (
	<div className={styles.container}>
		{heroes.map((hero) => (
        <div key={hero.id}>
          <Hero heroName={[hero.name]} />
        </div>
      ))}
	</div>
  )
}

export default HeroGrid