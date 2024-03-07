const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-8">
      <div>
        <h2 className="text-2xl font-bold">Logo</h2>
      </div>
      <div>
        <ul className="flex items-center justify-center space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
