import { createContext, useState } from "react";
import { CLOTH_LIST } from "../data";

export const ClothContext = createContext(null);

function getDefaultCart() {
  let cart = {};

  for (let i = 0; i < CLOTH_LIST.length; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ClothContextProvider = ({ children }) => {
  const [clothItems, setClothItems] = useState(getDefaultCart());
  console.log(clothItems);

  const getTotalPrice = () => {
    let totalAmount = 0;
    for (const itemId in clothItems) {
      if (clothItems[itemId] > 0) {
        const itemInfo = CLOTH_LIST.find(
          (cloth) => cloth.id === Number(itemId)
        );
        totalAmount += itemInfo.price * clothItems[itemId];
      }
    }
    return totalAmount;
  };

  const totalItems = Object.values(clothItems).reduce(
    (total, count) => total + count,
    0
  );

  const addToCart = (itemId) => {
    setClothItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setClothItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeAllElement = (itemId) => {
    setClothItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const removeAllFromCart = () => {
    setClothItems(getDefaultCart());
  };

  const contextValue = {
    clothItems,
    totalItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    removeAllElement,
    getTotalPrice,
  };

  return (
    <ClothContext.Provider value={contextValue}>
      {children}
    </ClothContext.Provider>
  );
};

export default ClothContextProvider;
