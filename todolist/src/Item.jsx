/* eslint-disable react/prop-types */
import { useState } from "react";

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
    <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
      <p className="text-lg font-medium text-gray-800">{name}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-3">
          <button
            onClick={() => setIsEdit(true)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:underline"
          >
            ❌
          </button>
        </div>
      </div>
      {isEdit && (
        <form
          onSubmit={handleEdit}
          className="mt-3 p-3 border rounded-lg bg-gray-100"
        >
          <p className="text-sm text-gray-600 mb-2">Edit it too?</p>
          <input
            onChange={(e) => setTheUpdate(e.target.value)}
            value={theUpdate}
            className="border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter new name"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Change
          </button>
        </form>
      )}
    </div>
  );
}

export default Item;
