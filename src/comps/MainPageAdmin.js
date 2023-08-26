import React, { useState } from "react";
import "../style/MainPageAdmin.css";
import "../style/ItemAdmin.css";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

const MainPageAdmin = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemType, setItemType] = useState("");
  const [sizeStocks, setSizeStocks] = useState({});
  const [sizeNameInput, setSizeNameInput] = useState("");
  const [sizeQuantityInput, setSizeQuantityInput] = useState("");
  const [sizes, setSizes] = useState([]);
  const [sizeNameError, setSizeNameError] = useState(false);
  const [sizeQuantityError, setSizeQuantityError] = useState(false);
  const [itemTypeError, setItemTypeError] = useState(false);
  const [itemNameError, setItemNameError] = useState(false);
  const [itemPriceError, setItemPriceError] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const { user } = useContext(UserContext);

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
      alert("אנא בחר קובץ תמונה חוקי (לדוגמה, JPEG, PNG).");
    }
  };
  const handleDeleteImg = () => {
    setSelectedFile(null);
    setPreviewUrl("");
  };

  const canAddItem = itemType != "" && itemName != "" && itemPrice != "";

  const handleAddItem = (e) => {
    e.preventDefault();
    if (canAddItem && sizes.length > 0 && selectedFile != null) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("item_description", itemName);
      formData.append("type", itemType);
      formData.append("price", itemPrice);
      formData.append("stock", JSON.stringify(sizeStocks));
      // fetch
      try {
        const response = fetch(
          `http://localhost:3001/api/items?username=${user.username}&password=${user.password}`,
          {
            method: "post",
            body: formData,
          }
        );
      } catch (error) {
        console.error("Error:", error);
      }

      console.log("Adding item:", itemName, itemType, sizeStocks);
      alert("מוסיף פריט:", itemName, itemType, sizeStocks);
      setItemName("");
      setItemType("");
      setItemPrice("");
      setSizeStocks({});
      setSizeNameInput("");
      setSizeQuantityInput("");
      setSizes([]);
      setSizeNameError(false);
      setSizeQuantityError(false);
      setItemTypeError(false);
      setItemNameError(false);
      setItemPriceError(false);
      setSelectedFile(null);
      setPreviewUrl("");
    } else {
      setItemNameError(itemName === "");
      setItemTypeError(itemType === "");
      setItemPriceError(itemPrice === "");
      if (sizes.length == 0) alert("הוסף מלאי");
      else if (!selectedFile) alert("הוסף תמונה");
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
      <form
        onSubmit={handleAddItem}
        className="card"
        enctype="multipart/form-data"
      >
        <div>
          <label>
            שם הפריט:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className={itemNameError ? "error input" : "input"}
            />
          </label>
        </div>
        <div>
          <label>
            סוג הפריט:
            <select
              value={itemType}
              onChange={(e) => setItemType(e.target.value)}
              className={itemTypeError ? "error select-admin" : "select-admin"}
            >
              <option value="">--בחר סוג--</option>
              <option value="Shirt">חולצה</option>
              <option value="Skirt">חצאית</option>
              <option value="Dress">שמלה</option>
              <option value="Shoes">נעל</option>
              <option value="Accessories">אקססוריז</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            מחיר הפריט:
            <input
              type="number"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              className={itemPriceError ? "error input" : "input"}
            />
          </label>
        </div>
        <div className="upload">
          {previewUrl && (
            <img
              className="image-admin"
              src={previewUrl}
              alt="Selected"
              style={{ maxWidth: "500px" }}
            />
          )}
          <input type="file" onChange={handleFileChange} />
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
        <div>
          <button className="button-item" type="submit">
            הוסף פריט <i className="fa fa-plus"></i>
          </button>
        </div>
      </form>
    </main>
  );
};

export default MainPageAdmin;
