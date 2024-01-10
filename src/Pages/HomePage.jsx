import GoodList from "../Components/GoodList/GoodList";
import Girl from "../assets/Images/Girl.png";

const HomePage = () => {
  return (
    <section className="w-full h-[800px] relative -top-6 bg-cover bg-no-repeat bg-center main">
      <div className="relative -bottom-[90px] max-w-[1212px] h-[700px] flex justify-between items-center pt-[95px] mx-auto">
        <div className="w-[700px] z-30 mb-[160px]">
          <div className="relative w-full h-6 flex items-center">
            <span className="w-[54px] h-[1.5px] bg-red-500 absolute"></span>
            <h4 className="uppercase font-semibold ps-[68px]">new trend</h4>
          </div>
          <div className="w-[750px] text-7xl font-thin">
            AUTUMN SALE STYLISH WOMENS
          </div>
          <div className="w-[125px] mt-4 font-medium cursor-pointer border-b-2 border-b-black">
            DISCOVER MORE
          </div>
        </div>
        <div className="mb-[82px]">
          <img src={Girl} alt="" />
        </div>
      </div>
      <GoodList />
    </section>
  );
};

export default HomePage;
