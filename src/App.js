import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      //save the data into a variable
      // console.log(output);
      setCourses(output.data);
    } catch (error) {
      toast.error("something went wrong");
    }

    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bgWhite ">
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div
          className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap mt-4 justify-center items-center min-h-[50vh]"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
