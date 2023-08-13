import React, { useState } from "react";
import "../style/MainPageAdmin.css";
import "../style/ItemAdmin.css";

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
    if (
      sizeNameInput &&
      sizeQuantityInput &&
      Number(sizeQuantityInput) >= 0 &&
      !sizes.includes(sizeNameInput)
    ) {
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
      setSizeQuantityError(
        sizeQuantityInput === "" || Number(sizeQuantityInput) < 0
      );
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
    <main className="main-conteainer">
      <h2>הוספת פריט</h2>
      <form onSubmit={handleAddItem} className="card">
        <label>
          שם הפריט:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className={itemNameError ? "error input" : "input"}
          />
        </label>
        <label>
          סוג הפריט:
          <select
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            className={itemTypeError ? "error select-admin" : "select-admin"}
          >
            <option value="">--בחר סוג--</option>
            <option value="shirt">חולצה</option>
            <option value="skirt">חצאית</option>
            <option value="dress">שמלה</option>
            <option value="shoe">נעל</option>
            <option value="accesories">אקססוריז</option>
          </select>
        </label>
        <div className="upload">
          {previewUrl && (
            <img
              className="image-admin"
              src={previewUrl}
              alt="Selected"
              style={{ maxWidth: "500px" }}
            />
          )}
          <input type="file" onChange={handleFileChange}/>
          {selectedFile && (
            <button className="button-item" onClick={handleDeleteImg}>
              מחק <i className="fa fa-trash"></i>
            </button>
          )}
        </div>
        <label>
          שם המידה:
          <input
            type="text"
            value={sizeNameInput}
            onChange={(e) => setSizeNameInput(e.target.value)}
            className={sizeNameError ? "error input" : "input"}
          />
        </label>
        <label>
          כמות:
          <input
            type="number"
            value={sizeQuantityInput}
            onChange={(e) => setSizeQuantityInput(e.target.value)}
            className={sizeQuantityError ? "error input" : "input"}
          />
        </label>
        <button className="button-item" type="button" onClick={handleAddSize}>
          הוסף <i className="fa fa-plus"></i>
        </button>
        {sizes.map((size) => (
          <div key={size}>
            <label>
              {size}:
              <input
              className="input"
                type="number"
                value={sizeStocks[size] || ""}
                onChange={(e) => handleSizeStockChange(size, e.target.value)}
              />
            </label>
            <button
              className="button-item"
              onClick={() => {
                deleteSize(size);
              }}
            >
              מחק <i className="fa fa-trash"></i>
            </button>
          </div>
        ))}
        <button className="button-item" type="submit">
          {" "}
          הוסף פריט <i className="fa fa-plus"></i>
        </button>
      </form>
    </main>
  );
};

export default MainPageAdmin;
