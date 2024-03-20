import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootPage;
