import React from "react";
import "./CollectionStyle.css"

const Collection = ({ img, des }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="h-auto  border border-blue-300 pb-2">
        <img className="h-[16rem] w-full object-cover" src={img} />
        <div className="flex flex-col m-2">
          <h3 className="text-xl font-medium my-1 ">{des}</h3>

          <p className="text-xs leading-5 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            recusandae nulla quis et ducimus amet, similique nemo voluptas
            fugiat sunt ad illo officia, quas ullam, deleniti in vel laudantium
            ab?
          </p>
          <span className="border-b-[0.5px] border-b-gray-200 mt-2"></span>
        </div>
        <div className="flex flex-row justify-between mx-3">
          <button className="text-blue-500 text-xs">
            READ MORE
          </button>

          <span className="text-xs">January 20, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Collection;
