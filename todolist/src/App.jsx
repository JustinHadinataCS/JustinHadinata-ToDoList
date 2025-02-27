import { useState } from "react";
import Item from "./Item";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Sample Item 1" },
    { id: 2, name: "Sample Item 2" },
  ]);
  const [newItem, setNewItem] = useState("");

  function handleAddItem(e) {
    e.preventDefault();
    if (!newItem.trim()) return;
    setItems([...items, { id: Date.now(), name: newItem }]);
    setNewItem("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Minimalist List
        </h1>
        <form onSubmit={handleAddItem} className="flex gap-2 mb-4">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a new item"
            className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>
        <div className="space-y-3">
          {items.map((item) => (
            <Item key={item.id} {...item} onItems={setItems} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
