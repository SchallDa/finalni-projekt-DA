import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import ReactGA from "react-ga4";
import { use } from "react";

const GA_ID = "G-XK10LZ90XX";

export const App = () => {
  useEffect(() => {
    ReactGA.initialize(GA_ID);
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
