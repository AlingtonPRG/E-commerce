import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { HomePage, SingleGood } from "./Pages";
import { Cart } from "./Components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
        <Route path="/info/:id" element={<SingleGood />} />
      </Routes>
    </div>
  );
};

export default App;
