import React, { useState } from "react";
import "../style/MainPageAdmin.css";

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
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewUrl("");
      alert("Please select a valid image file (e.g., JPEG, PNG).");
    }
  };
  const handleDeleteImg = () => {
    setSelectedFile(null);
    setPreviewUrl("");
  };

  const canAddItem = itemType != "" && itemName != "";

  const handleAddItem = (e) => {
    e.preventDefault();
    if (canAddItem && sizes.length > 0 && selectedFile != null) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("text", "");
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
      setSelectedFile(null);
    } else {
      setItemNameError(itemName === "");
      setItemTypeError(itemType === "");
      if (sizes.length == 0) alert("add sizes");
      else if (!selectedFile) alert("add file");
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
  const deleteSize = (size) => {
    setSizes((sizes) => sizes.filter((s) => s != size));
    setSizeStocks((stock) => {
      const updatedSizeStocks = { ...stock };
      delete updatedSizeStocks[size];
      return updatedSizeStocks;
    });
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
        <div className="upload">
          <input type="file" onChange={handleFileChange} />
          {selectedFile && <button onClick={handleDeleteImg}>Delete</button>}
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Selected"
              style={{ maxWidth: "100px" }}
            />
          )}
        </div>
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
            <button
              onClick={() => {
                deleteSize(size);
              }}
            >
              del
            </button>
          </div>
        ))}
        <button type="submit">Add Item</button>
      </form>
    </main>
  );
};

export default MainPageAdmin;
