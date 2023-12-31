import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Videodi = () => {
  const { name } = useSelector((s) => s.user);
  const { userImage } = useSelector((s) => s.user);
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
        {
          id: Date.now(),
          text: inputValue,
          createdAt: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
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
            <div className="arrow-video">
              <NavLink to={"/marketing"}>
                <div className="arrow-bl">
                  <IoIosArrowBack />
                </div>
              </NavLink>

              <h1>Урок 1 : Ознакомление</h1>
            </div>

            <div className="video-if">
              <iframe src="https://www.youtube.com/embed/UIKyAKC0ab8"></iframe>
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
                      <img
                        className="video--right__chat--ulGroup__userImage"
                        src={userImage}
                        alt=""
                      />
                      <div>
                        <div className="video--right__chat--ulGroup--nameAndHourse">
                          <h1>{name}</h1>
                          {item.createdAt.toLocaleString()}
                        </div>

                        {item.text}
                        {item.updatedAt && (
                          <>
                            {" "}
                            | Last Updated: {item.updatedAt.toLocaleString()}
                          </>
                        )}
                      </div>
                    </ul>
                  ))}
                </ul>
              </div>
              <div className="video--right__chat--inputGen">
                <input
                  placeholder="Комментировать..."
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={(e)=>{
                    if(e.key === 'Enter'){
                      handleAddItem()
                    }
                  }}
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
              <div className="video--right__chat--inputPen">
                <input
                  placeholder="Комментировать..."
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
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
