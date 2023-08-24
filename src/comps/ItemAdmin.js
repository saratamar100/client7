import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/ItemAdmin.css";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const ItemAdmin = () => {
  const params = useParams();
  const [item, setItem] = useState({});
  const [editableDetails, setEditableDetails] = useState({
    item_description: false,
    price: false,
    stock: false,
  });
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [sizeNameInput, setSizeNameInput] = useState("");
  const [sizeQuantityInput, setSizeQuantityInput] = useState("");
  const { user, setUser } = useContext(UserContext);
  const getItem = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/items/${params.id}?username=${user.username}&password=${user.password}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data[0]);
      setItem(data[0]);
    } catch (error) {}
  };
  useEffect(() => {
    getItem();
  }, []);

  const handleEditDetail = (detailName) => {
    if (detailName == "stock")
      setUpdatedDetails((prevEditableDetails) => ({
        ...prevEditableDetails,
        stock: { ...item.stock },
      }));
    setEditableDetails((prevEditableDetails) => ({
      ...prevEditableDetails,
      [detailName]: true,
    }));
  };

  const handleSaveDetail = async (detailName) => {
    // fetch
    try {
      const response = await fetch(
        `http://localhost:3001/api/items/${params.id}?username=${user.username}&password=${user.password}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ [detailName]: updatedDetails[detailName] }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      if (detailName === "stock")
        setUpdatedDetails((prevUpdatedDetails) => ({
          ...prevUpdatedDetails,
          stock: {},
        }));
      setEditableDetails((prevEditableDetails) => ({
        ...prevEditableDetails,
        [detailName]: false,
      }));
      setItem((prevItem) => ({
        ...prevItem,
        [detailName]: updatedDetails[detailName] || prevItem[detailName],
      }));
    } catch (error) {}
  };

  const handleCancelEditDetail = (detailName) => {
    setUpdatedDetails((prevUpdatedDetails) => ({
      ...prevUpdatedDetails,
      [detailName]: undefined,
    }));
    setEditableDetails((prevEditableDetails) => ({
      ...prevEditableDetails,
      [detailName]: false,
    }));
  };

  const handleDetailChange = (detailName, value) => {
    if (detailName == "stock")
      setUpdatedDetails((prevUpdatedDetails) => ({
        ...prevUpdatedDetails,
        stock: { ...prevUpdatedDetails.stock, [value[0]]: value[1] },
      }));
    else
      setUpdatedDetails((prevUpdatedDetails) => ({
        ...prevUpdatedDetails,
        [detailName]: value,
      }));
  };

  const deleteSize = (sizeToDelete) => {
    setUpdatedDetails((prevUpdatedDetails) => {
      const updatedStock = Object.keys(prevUpdatedDetails.stock).reduce(
        (result, size) => {
          if (size !== sizeToDelete) {
            result[size] = prevUpdatedDetails.stock[size];
          }
          return result;
        },
        {}
      );
      return {
        ...prevUpdatedDetails,
        stock: updatedStock,
      };
    });
  };

  const handleAddSize = () => {
    //if(updatedDetails.stock.)
    if (sizeNameInput && sizeQuantityInput) {
      setUpdatedDetails((prevUpdatedDetails) => ({
        ...prevUpdatedDetails,
        stock: {
          ...prevUpdatedDetails.stock,
          [sizeNameInput]: parseInt(sizeQuantityInput),
        },
      }));
      setSizeNameInput("");
      setSizeQuantityInput("");
    } else {
      alert(" יש למלא את כל השדות");
    }
  };

  if (!item.stock) return <main></main>;
  return (
    <main className="main-container">
      <div className="card">
        <h1>{item.item_description}</h1>
        {editableDetails.item_description ? (
          <div>
            <label>
              <strong>שם:</strong>
            </label>
            <input
              type="text"
              value={updatedDetails.item_description || item.item_description}
              onChange={(e) =>
                handleDetailChange("item_description", e.target.value)
              }
            />
            <button
              className="button-item"
              onClick={() => handleSaveDetail("item_description")}
            >
              שמור <i className="fa fa-floppy-o"></i>
            </button>
            <button
              className="button-item"
              onClick={() => handleCancelEditDetail("item_description")}
            >
              בטל <i className="fa fa-times"></i>
            </button>
          </div>
        ) : (
          <div>
            <p>
              <strong>שם:</strong> {item.item_description}
            </p>
            <button
              className="button-item"
              onClick={() => handleEditDetail("item_description")}
            >
              ערוך <i className="fa fa-pencil"></i>
            </button>
          </div>
        )}
        {/*image*/}
        <img src={item.image} className="image-admin" />

        {/* Price */}
        {editableDetails.price ? (
          <div>
            <label>מחיר:</label>
            <input
              type="number"
              value={updatedDetails.price || item.price}
              onChange={(e) => handleDetailChange("price", e.target.value)}
            />
            <button
              className="button-item"
              onClick={() => handleSaveDetail("price")}
            >
              שמור <i className="fa fa-floppy-o"></i>
            </button>
            <button
              className="button-item"
              onClick={() => handleCancelEditDetail("price")}
            >
              בטל <i className="fa fa-times"></i>
            </button>
          </div>
        ) : (
          <div>
            <p>
              <strong>מחיר:</strong> {item.price} שקלים
            </p>
            <button
              className="button-item"
              onClick={() => handleEditDetail("price")}
            >
              ערוך <i className="fa fa-pencil"></i>
            </button>
          </div>
        )}

        {/* Stock */}
        {editableDetails.stock ? (
          <div>
            <label>מלאי:</label>
            <div className="adding">
              <label>
                שם המידה:
                <input
                  type="text"
                  value={sizeNameInput}
                  onChange={(e) => setSizeNameInput(e.target.value)}
                />
              </label>
              <label>
                כמות:
                <input
                  type="number"
                  value={sizeQuantityInput}
                  onChange={(e) => setSizeQuantityInput(e.target.value)}
                />
              </label>
              <button
                className="button-item"
                type="button"
                onClick={handleAddSize}
              >
                הוסף <i className="fa fa-plus"></i>
              </button>
            </div>
            {Object.keys(updatedDetails.stock || item.stock).map((size) => (
              <div key={size}>
                <label>
                  {size}:
                  <input
                    type="number"
                    value={
                      updatedDetails.stock &&
                      updatedDetails.stock[size] !== undefined
                        ? updatedDetails.stock[size]
                        : item.stock[size]
                    }
                    onChange={(e) =>
                      handleDetailChange("stock", [size, e.target.value])
                    }
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
            <button
              className="button-item"
              onClick={() => handleSaveDetail("stock")}
            >
              שמור <i className="fa fa-floppy-o"></i>
            </button>
            <button
              className="button-item"
              onClick={() => handleCancelEditDetail("stock")}
            >
              בטל <i className="fa fa-times"></i>
            </button>
          </div>
        ) : (
          <div>
            <div>
              <h1>מלאי:</h1>
              <ul>
                {Object.entries(item.stock).map(([key, value]) => (
                  <li className="li-admin" key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="button-item"
              onClick={() => handleEditDetail("stock")}
            >
              ערוך <i className="fa fa-pencil"></i>
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default ItemAdmin;
