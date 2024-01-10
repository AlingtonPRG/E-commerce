import { useState } from "react";
import { CLOTH_LIST } from "../../data";
import { GoodCard } from "../GoodCard";

const GoodList = () => {
  const [clothList, setClothList] = useState(CLOTH_LIST);
  return (
    <div className="w-full h-[1000px] mt-[200px]">
      <ul className="w-[1470px] h-full mx-auto flex flex-wrap gap-[30px]">
        {clothList.map((cloth) => (
          <GoodCard key={cloth.id} cloth={cloth} />
        ))}
      </ul>
      <footer className="w-full h-[120px] bg-dark mt-[50px] text-white flex items-center justify-center">
        Copyright © E-commerce Shop 2023. All rights reserved.
      </footer>
    </div>
  );
};

export default GoodList;
