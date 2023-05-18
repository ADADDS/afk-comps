import styles from "./hero.module.css";

const Hero = ({ heroName, faction, isSelected }) => {
  return (
	<div className={`${styles.container} ${isSelected ? styles.selected : ""}`}>
		<img className={styles.faction_badge} 
		src={`/Images/Faction/${faction}.png`}/>
		<img
			className={styles.avatar}
			src={`/Images/HeroAvatar/${heroName}.png`}
			alt={heroName}
			width={100}
			height={100}
		/>
	</div>
	
  )
}

export default Hero



