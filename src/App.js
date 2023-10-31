import Header from "./component/Header/Header";
import React from "react";
import SearchBar from "./component/SearchBar/SearchBar";
import FoodSelection from "./component/FoodSelection/FoodSelection";
import Description1 from "./component/Description/Description1";
import Footer from "./component/Footer/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FoodDetails from "./component/FoodDetails/FoodDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header></Header>
              <SearchBar></SearchBar>
              <FoodSelection></FoodSelection>
              <Description1></Description1>
              <Footer></Footer>
            </>
          }/>
          <Route exact path="/:catagory/:id" element={
              <>
                <Header></Header>
                <FoodDetails></FoodDetails>
                <Footer></Footer>
              </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
