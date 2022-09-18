import Home from "./component/home/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import View from "./component/viewTrip/view";


function App() {
  return (
    <div className="FurnitureDesignHomePage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="view/" element={<View />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
