import Backdrop from "./Backdrop";
import styles from "./EditingPanel.module.css";

const EditingPanel = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()} className={styles.container}>
        <div className={styles.Header}>
          Editing
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </Backdrop>
  );
};

export default EditingPanel;
