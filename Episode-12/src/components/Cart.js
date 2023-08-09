import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    console.log("clear cart clicked");
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className={cartItems.length !== 0 ? `bg-black text-white p-2 m-2 rounded-md` : `bg-gray-100 text-black cursor-not-allowed p-2 m-2 rounded-md` }
        onClick={handleClearCart}
        disabled = {cartItems.length === 0}
      >
        Clear Cart
      </button>
      <div className="w-8/12 m-auto">
        {cartItems.length === 0 && <h1>Cart is empty. Add items to cart!!!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
