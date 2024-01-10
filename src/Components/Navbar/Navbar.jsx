import { useState, useEffect, useContext } from "react";
import Logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { Cart } from "../Cart";
import { ClothContext } from "../../Context/Context";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useContext(ClothContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 60;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header>
      <div
        className={`w-full z-[300] py-2 px-10 flex justify-between items-center fixed top-0 left-0 duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="w-10">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="w-10 relative cursor-pointer" onClick={toggleCart}>
          <span className="w-[22px] h-[22px] absolute bottom-1 right-0 bg-red-500 rounded-full flex items-center justify-center text-sm text-white">
            {totalItems}
          </span>
          <div className="text-[35px]">
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>
      <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />
      <section></section>
    </header>
  );
};

export default Navbar;
