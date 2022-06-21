import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";

const Main = () => {
  return (
    <>
      <HeroBanner />

      <NavBar />

      <Outlet />
    </>
  );
};

export default Main;
