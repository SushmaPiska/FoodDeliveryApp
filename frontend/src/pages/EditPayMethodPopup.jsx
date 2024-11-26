import React from "react";
import styles from "./EditPayMethodPopup.module.css";
function EditPayMethodPopup() {
  return (
    // <>
    <div className={styles.container}>
      <h2>Edit Payment Method</h2>
      <div className={styles.body}>
        <label htmlFor="cardNum">
          <input type="number" />
        </label>
        <label htmlFor="cardNum">
          <input type="tel" />
        </label>
      </div>
      <div className={styles.footer}>
        <button className={styles.removeBtn}>Remove</button>
        <button className={styles.cancelBtn}>Cancel</button>
        <button className={styles.saveBtn}>Save Changes</button>
      </div>
    </div>

    // </>
  );
}

export default EditPayMethodPopup;
