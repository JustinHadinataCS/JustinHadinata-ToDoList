/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Item.module.css";
function Item({ name, onItems, id, items, onName }) {
  const [isEdit, setIsEdit] = useState(false);
  const [theUpdate, setTheUpdate] = useState("");
  function handleDelete() {
    onItems(items.filter((item) => item.id !== id));
    setTheUpdate("");
    onName("");
  }
  function handleEdit(e) {
    e.preventDefault();
    onItems(
      items.map((item) =>
        item.id === id ? { ...item, name: theUpdate } : item
      )
    );
    setTheUpdate("");
    onName("");
    setIsEdit(false);
  }
  return (
    <div className={styles.main}>
      <p> {name}</p>
      <div className={styles.rightSide}>
        <div className={styles.editCross}>
          {" "}
          <p className={styles.edit} onClick={() => setIsEdit(true)}>
            Edit
          </p>
          <p onClick={handleDelete}>❌</p>
        </div>

        {isEdit && (
          <form onSubmit={handleEdit}>
            <p>Edit it too?</p>
            <input
              onChange={(e) => setTheUpdate(e.target.value)}
              value={theUpdate}
            />
            <button>Change</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Item;
