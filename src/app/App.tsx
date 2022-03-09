import React from "react";
import { HashRouter } from "react-router-dom";
import Loader from "./components/loader/Loader";
import Navigation from "./navigation/Navigation";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navigation />
      <Loader />
    </HashRouter>
  );
};

export default App;
