import styles from "./LeftPanel.module.css";

const LeftPanel = () => {
  return (
    <div>
      
      <div className={styles.wrapper}>
			<div className={styles.logo}>
				<div className={styles.block}></div>
				<span>Comps</span>
			</div>
		</div>
    </div>
  )
}

export default LeftPanel