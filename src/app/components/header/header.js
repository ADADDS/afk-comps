import styles from './header.module.css'

const Header = () => {
  return (
	<div>
		<div className={styles.wrapper}>
			<div className={styles.logo}>
				<div className={styles.block}></div>
				<span>Comps</span>
			</div>
			<div><button>share</button></div>
		</div>
	</div>
  )
}

export default Header