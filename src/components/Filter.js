import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  const filterHandler = (title) => {
    setCategory(title);
  };

  return (
    <div
      className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4
     justify-center"
    >
      {filterData.map((data) => {
        return (
          <button
            className={`text-lg px-2 py-1 rounded-md font-medium 
            text-bgWhite bg-bgDark hover:bg-opacity-50 border-2 transition-all duration-300
           ${
             category === data.title
               ? "bg-opacity-80 border-transparent"
               : "bg-opacity-40 border-bgWhite"
           }
            `}
            key={data.id}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
