import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Feed from "./Components/Feed";

const App = () => {
  return (
    <div className="" > 

      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </div>
  );
};

export default App;
