import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center gap-4">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/log-in"}>Log in</Link>
    </div>
  );
};

export default NavBar;
