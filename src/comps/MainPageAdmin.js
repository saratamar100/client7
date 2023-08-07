import React, { useState } from "react";
import "../style/MainPageAdmin.css"; // Update the path to your stylesheet

const MainPageAdmin = () => {
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("");
  const [sizeStocks, setSizeStocks] = useState({});
  const [sizeNameInput, setSizeNameInput] = useState("");
  const [sizeQuantityInput, setSizeQuantityInput] = useState("");
  const [sizes, setSizes] = useState([]);
  const [sizeNameError, setSizeNameError] = useState(false);
  const [sizeQuantityError, setSizeQuantityError] = useState(false);
  const [itemTypeError, setItemTypeError] = useState(false);
  const [itemNameError, setItemNameError] = useState(false);

  const canAddItem = itemType != "" && itemName != "";

  const handleAddItem = (e) => {
    e.preventDefault();
    if (canAddItem && sizes.length > 0) {
      // fetch
      console.log("Adding item:", itemName, itemType, sizeStocks);
      alert("Adding item:", itemName, itemType, sizeStocks);
      setItemName("");
      setItemType("");
      setSizeStocks({});
      setSizeNameInput("");
      setSizeQuantityInput("");
      setSizes([]);
      setSizeNameError(false);
      setSizeQuantityError(false);
      setItemTypeError(false);
      setItemNameError(false);
    } else {
      setItemNameError(itemName === "");
      setItemTypeError(itemType === "");
      if (sizes.length == 0) alert("add sizes");
      //setSizeNameError(sizeNameInput === "" || sizes.includes(sizeNameInput));
      //   setSizeQuantityError(
      //     sizeQuantityInput === "" || sizes.includes(sizeNameInput)
      //   );
    }
  };

  const handleAddSize = () => {
    if (sizeNameInput && sizeQuantityInput && !sizes.includes(sizeNameInput)) {
      setSizes((prevSizes) => [...prevSizes, sizeNameInput]);
      setSizeStocks((prevSizeStocks) => ({
        ...prevSizeStocks,
        [sizeNameInput]: sizeQuantityInput,
      }));
      setSizeNameInput("");
      setSizeQuantityInput("");
      setSizeNameError(false);
      setSizeQuantityError(false);
    } else {
      setSizeNameError(sizeNameInput === "" || sizes.includes(sizeNameInput));
      setSizeQuantityError(sizeQuantityInput === "");
    }
  };

  const handleSizeStockChange = (size, stock) => {
    setSizeStocks((prevSizeStocks) => ({
      ...prevSizeStocks,
      [size]: stock,
    }));
  };

  return (
    <main>
      <h2>MainPageAdmin</h2>
      <form onSubmit={handleAddItem}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className={itemNameError ? "error" : ""}
          />
        </label>
        <label>
          Item Type:
          <select
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            className={itemTypeError ? "error" : ""}
          >
            <option value="">Select type</option>
            <option value="dress">Dress</option>
            <option value="shirt">Shirt</option>
          </select>
        </label>
        <label>
          Size Name:
          <input
            type="text"
            value={sizeNameInput}
            onChange={(e) => setSizeNameInput(e.target.value)}
            className={sizeNameError ? "error" : ""}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={sizeQuantityInput}
            onChange={(e) => setSizeQuantityInput(e.target.value)}
            className={sizeQuantityError ? "error" : ""}
          />
        </label>
        <button type="button" onClick={handleAddSize}>
          Add
        </button>
        {sizes.map((size) => (
          <div key={size}>
            <label>
              {size}:
              <input
                type="number"
                value={sizeStocks[size] || ""}
                onChange={(e) => handleSizeStockChange(size, e.target.value)}
              />
            </label>
          </div>
        ))}
        <button type="submit">Add Item</button>
      </form>
    </main>
  );
};

export default MainPageAdmin;
