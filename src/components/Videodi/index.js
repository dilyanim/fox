import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const Videodi = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([
        ...items,
        { id: Date.now(), text: inputValue, createdAt: new Date() },
      ]);
      setInputValue("");
    }
  };

  const handleEditItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setInputValue(itemToEdit.text);
      setEditingItemId(id);
    }
  };

  const handleUpdateItem = () => {
    if (editingItemId !== null) {
      setItems(
        items.map((item) =>
          item.id === editingItemId
            ? { ...item, text: inputValue, updatedAt: new Date() }
            : item
        )
      );
      setInputValue("");
      setEditingItemId(null);
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div id="video">
      <div className="container">
        <div className="video">
          <div className="video--left">
            <h1 style={{ fontSize: "20px", fontWeight: "400" }}>
              Урок 1 : Ознакомление
            </h1>
            <div className="video-if">
              <iframe
                width="850px"
                height="500px"
                src="https://www.youtube.com/embed/UIKyAKC0ab8"
              ></iframe>
            </div>
            <div className="video-text">
              <div className="video1">
                <h3>Как ставить и оценивать задачи</h3>
                <button>Поделиться</button>
              </div>
              <div className="video2">
                <p>1 месяц назад</p>
                <p>1430 просмотров</p>
              </div>
            </div>
          </div>
          <div className="video--right">
            <div className="video--right__chat">
              <div className="video--right__chat--ulGroup">
                <ul>
                  {items.map((item) => (
                    <ul key={item.id}>
                      {item.text} ( {item.createdAt.toLocaleString()})
                      {item.updatedAt && (
                        <> | Last Updated: {item.updatedAt.toLocaleString()}</>
                      )}
                      {/* <button onClick={() => handleEditItem(item.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteItem(item.id)}>
                        Delete
                      </button> */}
                    </ul>
                  ))}
                </ul>
              </div>
              <div className="video--right__chat--inputGen">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button
                  className="video--right__chat--inputGen__add"
                  onClick={
                    editingItemId !== null ? handleUpdateItem : handleAddItem
                  }
                >
                  {editingItemId !== null ? (
                    <AiOutlineSend style={{ fontSize: "20px" }} />
                  ) : (
                    <AiOutlineSend style={{ fontSize: "20px" }} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videodi;
