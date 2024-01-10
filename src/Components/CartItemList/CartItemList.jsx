import { useContext } from "react";
import { ClothContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const CartItemList = ({ cloth }) => {
  const { clothItems, removeFromCart, removeAllElement, addToCart } =
    useContext(ClothContext);
  return (
    <li
      className="w-full min-h-[150px] flex items-center px-4 border-b border-b-light"
      key={cloth.id}
    >
      <Link className="w-20" to={`/info/${cloth.id}`}>
        <img className="w-20" src={cloth.img} alt={cloth.title} />
      </Link>
      <div className="ms-2.5">
        <div className="w-full h-1/2 flex mb-2.5">
          <Link className="w-[240px]" to={`/info/${cloth.id}`}>
            <h4 className="w-[240px] text-sm uppercase font-medium hover:underline">
              {cloth.title}
            </h4>
          </Link>
          <div
            className="text-gray-500 text-xl flex ms-1.5 cursor-pointer duration-100 hover:text-coral"
            onClick={() => removeAllElement(cloth.id)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="h-9 flex justify-between items-center">
          <div className="flex justify-between w-[85px] h-full items-center border border-lighter px-1.5">
            <button onClick={() => removeFromCart(cloth.id)}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <div className="font-medium text-lg">{clothItems[cloth.id]}</div>
            <button onClick={() => addToCart(cloth.id)}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="flex justify-between w-[150px]">
            <p className="text-light text-sm font-normal">$ {cloth.price}</p>
            <p className="font-medium text-sm">
              $ {(clothItems[cloth.id] * cloth.price).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItemList;
