import { Link } from "react-router-dom";
import { ClothContext } from "../../Context/Context";
import { useContext } from "react";

function GoodCard({ cloth }) {
  const { id, img, gender, title, price } = cloth;
  const { addToCart } = useContext(ClothContext);

  return (
    <li className="w-[270px] h-[490px] relative overflow-hidden">
      <div className="relative w-full h-[350px] flex justify-center items-center border border-lighter img-box">
        <img className="w-[110px] h-[160px] duration-300 img" src={img} alt={title} />
        <div className="absolute top-[25px] -right-[55px] flex flex-col gap-3 buttons opacity-0  duration-300">
          <button className="w-[50px] h-[50px] bg-coral shadow-button-shadow text-white" onClick={() => addToCart(id)}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <Link to={`/info/${id}`}>
            <button className="w-[50px] h-[50px] bg-white shadow-button-shadow">
              <i className="fa-solid fa-eye"></i>
            </button>
          </Link>
        </div>
      </div>
        <p className="text-sm text-light font-medium pt-2 pb-2">{gender}</p>
      <Link className="w-full" to={`/info/${id}`}>
        <h4 className="w-full font-bold pb-1 hover:underline">{title}</h4>
      </Link>
        <p className="font-semibold">$ {price}</p>
    </li>
  );
}

export default GoodCard;
