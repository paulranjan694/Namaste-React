import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 h-[150px] border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-xs font-light">{item.card.info.description}</p>
          </div>
          <div className="w-2/12">
            {item.card.info.imageId && (
              <img src={CDN_URL + item.card.info.imageId} className="w-60 h-5/6" />
            )}
            <div className="flex justify-center items-center">
            <button className={`p-1 bg-white rounded-md absolute w-20 cursor-pointer hover:shadow-lg text-sm border border-solid border-gray-500 ${item.card.info.imageId ?'mt-[-20px]': 'mt-10'}`}
            onClick={() => handleAddItem(item)} //registering a callback
            >Add +</button>
            </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
