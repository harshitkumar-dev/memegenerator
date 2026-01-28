import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";






const App = () => {
  return (



    <div className=" w-full h-screen flex flex-col relative items-center overflow-x-hidden background">
      <h1 className=" bg-white rounded-lg uppercase w-11/12 text-4xl text-center font-bold mt-[40px] ml-[15px] py-2 px-10">Random Gifs</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
};

export default App;
