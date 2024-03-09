import Navbar from "./components/Navbar";

const App = () => {
  const world = "World";

  const navList = ["Home", "About", "Blog", "Contact"];

  const handleClick = (e) => {
    alert("button clicked");
    console.log(e.target);
  };

  const handleSum = (num) => {
    alert(num + 5);
  };

  return (
    <div className="container mx-auto">
      <Navbar navList={navList} />

      <div className="font-mono text-xl font-semibold">
        <h2>Hello {world}</h2>
      </div>

      <button
        onClick={handleClick}
        className="px-5 py-3 font-semibold bg-gray-200 rounded-xl text-zinc-800"
      >
        Click Me
      </button>

      <button
        onClick={() => handleSum(5)}
        className="px-5 py-3 mx-5 my-5 font-semibold bg-gray-200 rounded-xl text-zinc-800"
      >
        Add Sum
      </button>
    </div>
  );
};

export default App;
