import styles from "./hero.module.css";

const Hero = ({ heroName, faction }) => {
  return (
	<div className={styles.container}>
		<img className={styles.faction_badge} 
		src={`/Images/Faction/${faction}.png`}/>
		<img
			className={styles.avatar}
			src={`/Images/HeroAvatar/${heroName}.png`}
			alt={heroName}
			width={80}
			height={80}
		/>
	</div>
	
  )
}

export default Hero



