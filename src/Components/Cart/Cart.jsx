import { useContext } from "react";
import { CLOTH_LIST } from "../../data";
import { CartItemList } from "../CartItemList";
import { ClothContext } from "../../Context/Context";

const Cart = ({ isCartOpen, toggleCart }) => {
  const { clothItems, removeAllFromCart, getTotalPrice, totalItems } =
    useContext(ClothContext);

  let totalPrice = getTotalPrice();

  return (
    <div
      className={`w-[450px] h-full bg-white fixed top-0 ${
        isCartOpen ? "right-0" : "-right-[460px]"
      } bottom-0 z-[300] shadow-cart-shadow duration-300 flex flex-col justify-between`}
    >
      <div className="w-[380px] h-[80px] bg- flex justify-between items-center border-b border-b-light mx-auto bg-white">
        <h4 className="uppercase text-sm font-medium">
          shopping bag ({totalItems})
        </h4>
        <button className="text-lg" onClick={toggleCart}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <ul className="w-[380px] h-[470px] mx-auto overflow-auto no-scrollbar mt-[5px]">
        {CLOTH_LIST.map((cloth) => {
          return (
            clothItems[cloth.id] !== 0 && (
              <CartItemList key={cloth.id} cloth={cloth} />
            )
          );
        })}
      </ul>
      <div className="w-[380px] h-[160px] border-t border-t-light mx-auto mb-[40px] flex flex-col bg-white">
        <div className="flex justify-between items-center mt-10 mb-4">
          <h4 className="uppercase font-medium ">
            total: $ {totalPrice.toFixed(2)}
          </h4>
          <button
            className="w-[50px] h-[50px] text-white text-xl bg-coral"
            onClick={() => removeAllFromCart(CLOTH_LIST.id)}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
        <div className="w-full h-[55px] flex gap-2.5">
          <button className="w-[185px] h-full bg-gray-300 font-medium  duration-7 5 hover:bg-dark hover:text-white">
            View cart
          </button>
          <button className="w-[185px] h-full bg-dark font-medium text-white duration-75 hover:bg-gray-300 hover:text-black">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
