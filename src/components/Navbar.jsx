import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-8">
      <div>
        <h2 className="text-2xl font-bold">Logo</h2>
      </div>
      <div>
        <ul className="flex items-center justify-center space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
