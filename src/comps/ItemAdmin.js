import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemAdmin = () => {
  const params = useParams();
  const [item, setItem] = useState({});
  const [editableDetails, setEditableDetails] = useState({
    name: false,
    price: false,
    stock: false,
  });
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [sizeNameInput, setSizeNameInput] = useState("");
  const [sizeQuantityInput, setSizeQuantityInput] = useState("");

  useEffect(() => {
    // fetch
    setItem({
      id: params.id,
      name: "Example T-Shirt",
      price: 19.99,
      img: "",
      stock: {
        M: 6,
        L: 0,
        XL: 5,
      },
    });
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

  const handleSaveDetail = (detailName) => {
    // fetch

    if (detailName === "stock")
      // setEditableDetails((prevEditableDetails) => ({
      //   ...prevEditableDetails,
      //   stock: false,
      // }));
      // setItem((prevItem) => ({
      //   ...prevItem,
      //   stock: { ...updatedDetails.stock },
      // }));
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
      alert("fill all");
    }
  };

  if (!item.stock) return <main></main>;
  return (
    <main>
      <div>
        <h1>{item.name}</h1>
        {editableDetails.name ? (
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={updatedDetails.name || item.name}
              onChange={(e) => handleDetailChange("name", e.target.value)}
            />
            <button onClick={() => handleSaveDetail("name")}>Save</button>
            <button onClick={() => handleCancelEditDetail("name")}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p>Name: {item.name}</p>
            <button onClick={() => handleEditDetail("name")}>Edit</button>
          </div>
        )}
        {/*image*/}
        <img src={item.img} />

        {/* Price */}
        {editableDetails.price ? (
          <div>
            <label>Price:</label>
            <input
              type="number"
              value={updatedDetails.price || item.price}
              onChange={(e) => handleDetailChange("price", e.target.value)}
            />
            <button onClick={() => handleSaveDetail("price")}>Save</button>
            <button onClick={() => handleCancelEditDetail("price")}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p>Price: {item.price}</p>
            <button onClick={() => handleEditDetail("price")}>Edit</button>
          </div>
        )}

        {/* Stock */}
        {editableDetails.stock ? (
          <div>
            <label>Stock:</label>
            <div className="adding">
              <label>
                Size Name:
                <input
                  type="text"
                  value={sizeNameInput}
                  onChange={(e) => setSizeNameInput(e.target.value)}
                />
              </label>
              <label>
                Quantity:
                <input
                  type="number"
                  value={sizeQuantityInput}
                  onChange={(e) => setSizeQuantityInput(e.target.value)}
                />
              </label>
              <button type="button" onClick={handleAddSize}>
                Add
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
                  style={{ width: "10px" }}
                  onClick={() => {
                    deleteSize(size);
                  }}
                >
                  del
                </button>
              </div>
            ))}
            <button onClick={() => handleSaveDetail("stock")}>Save</button>
            <button onClick={() => handleCancelEditDetail("stock")}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <div>
              <h1>Stock:</h1>
              <ul>
                {Object.entries(item.stock).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={() => handleEditDetail("stock")}>Edit</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default ItemAdmin;
