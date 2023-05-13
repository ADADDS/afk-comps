import styles from "./hero.module.css";

const Hero = ({ heroName }) => {
  return (
	<div className={styles.container}>
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



