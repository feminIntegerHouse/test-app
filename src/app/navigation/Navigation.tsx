import { ROUTES } from "app/constants/navigation";
import Home from "app/screens/home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
};

export default Navigation;
