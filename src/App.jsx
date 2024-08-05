import React from "react";
import Recipe from "./Components/Nutrition/Recipe/Recipe";
import Profile from "./Components/Profile/Profile";
import NutritionSection from "./Components/Nutrition/Nutrition";
import NutritionFact from "./Components/Nutrition/NutritionFact/NutritionFact";
// import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nutrition from "./Components/Nutrition/Nutrition";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/nutrition" element={<Nutrition />}></Route>
            <Route path="/recipe" element={<Recipe />}></Route>
            <Route path="/nutritionfact" element={<NutritionFact />}></Route>
            {/* <Route path="/nutrition" element={<Nutrition/>}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
