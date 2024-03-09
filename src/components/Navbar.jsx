const Navbar = ({ navList }) => {
  return (
    <nav className="flex items-center justify-between p-8">
      <div>
        <h2 className="text-2xl font-bold">Logo</h2>
      </div>
      <div>
        <ul className="flex items-center justify-center space-x-4">
          {navList.map((list) => {
            return <li key={list}>{list}</li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
