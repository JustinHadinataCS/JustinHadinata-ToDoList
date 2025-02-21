import { useState } from "react";

import Item from "./Item";
import styles from "./App.module.css";
function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setItems((items) => [...items, { name, id: items.length + 1 }]);
    setName("");
  }
  return (
    <>
      <div>
        <h1>A To Do List - Justin Hadinata - 2702298236</h1>
        <form>
          <input onChange={(e) => setName(e.target.value)} value={name} />
          <button onClick={handleSubmit}>Click</button>
        </form>
      </div>
      <div className={styles.ToDoListContainer}>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            items={items}
            onItems={setItems}
            onName={setName}
          />
        ))}
      </div>
    </>
  );
}

export default App;
