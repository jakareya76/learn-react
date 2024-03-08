import Navbar from "./components/Navbar";

const App = () => {
  const world = "World";
  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="font-mono text-xl font-semibold">
        <h2>Hello {world}</h2>
      </div>
    </div>
  );
};

export default App;
