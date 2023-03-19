import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div className="border-primary border-2 border-top">
        <Footer />
      </div>
    </>
  );
};

export default Main;
