import { useParams } from "react-router-dom";
import { CLOTH_LIST } from "../data";
import { useContext } from "react";
import { ClothContext } from "../Context/Context";

const SingleGood = () => {
  const { id } = useParams();
  const { addToCart } = useContext(ClothContext);

  const cloth = CLOTH_LIST.find((cloth) => cloth.id == id);

  const { img, definition, title, price } = cloth;

  return (
    <div>
      <div className="w-[1050px] h-[641px] mt-[80px] mx-auto flex justify-evenly gap-[90px]">
        <img className="w-[400px] h-[550px]" src={img} alt={title} />
        <div className="my-auto">
          <h2 className="w-[450px] text-[26px] font-semibold pb-1.5">
            {title}
          </h2>
          <p className="text-coral text-xl font-semibold pb-[25px]">$ {`${price}`}</p>
          <p className="w-[450px] mb-[30px]">{definition}</p>
          <button className="py-4 px-8 bg-dark font-medium text-white duration-200 hover:bg-light hover:text-dark" onClick={() => addToCart(cloth.id)}>
            Add to cart
          </button>
        </div>
      </div>
      <div className="w-full h-[120px] bg-dark mt-[20px] text-white flex items-center justify-center">
        Copyright © E-commerce Shop 2023. All rights reserved.
      </div>
    </div>
  );
};

export default SingleGood;
