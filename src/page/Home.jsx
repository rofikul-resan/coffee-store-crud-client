import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Link to={"/add-coffee"} className="mr-4">
        add coffee
      </Link>
      <Link to={"/update-coffee"}>update coffee</Link>
      <Outlet />
    </div>
  );
};

export default Home;
