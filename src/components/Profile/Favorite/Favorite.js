import React from "react";
import { useSelector } from "react-redux";

const Favorite = () => {
  const favorite = useSelector((state) => state.favorite.favorite);
  return (
    <div>
      {favorite.map((el) => {
        return (
          <div>
            <div>
              <img src={el.lesson1} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorite;
