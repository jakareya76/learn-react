import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id);

    if (selected === id) {
      setSelected(null);
    }
  };

  const handleMultiSelection = (id) => {
    let copyMultiple = [...multiple];

    const findIndexOfCurrent = copyMultiple.indexOf(id);

    console.log(findIndexOfCurrent);

    if (findIndexOfCurrent === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(findIndexOfCurrent, 1);
    }
  };

  return (
    <div className="px-8">
      <h2 className="text-xl font-semibold text-center">Accordion</h2>

      <div className="flex items-center justify-center mt-8">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="btn"
        >
          {enableMultiSelection ? "Disable" : "Enable"} Multi Selection
        </button>
      </div>

      <div className="max-w-[680px] h-full mx-auto mt-8">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="p-4 my-8 text-white bg-blue-500 rounded"
            >
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(item.id)
                    : handleSingleSelection(item.id)
                }
                className="flex items-center justify-between cursor-pointer"
              >
                <h3 className="text-xl">{item.question}</h3>
                <span className="text-3xl">+</span>
              </div>

              {selected === item.id ? (
                <div className="mt-5">
                  <p className="text-gray-200">{item.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
