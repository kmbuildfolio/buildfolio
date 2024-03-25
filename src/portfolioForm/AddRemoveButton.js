import React from "react";

const AddRemoveButton = ({changeContent, contentLength, removeAll}) => {
  return (
    <div className="flex justify-between mt-2">
      <button
        className="bg-black px-7 py-1 rounded-md 
                text-white"
        onClick={()=>{changeContent(true)}}
      >
        ADD
      </button>
      <button
        className="bg-black px-4 py-1 rounded-md
                 text-white hover:bg-gray-800"
        onClick={()=>{changeContent(false)}}
        style={{backgroundColor:(contentLength === 1 && !removeAll) ? "gray" : "black"}}
        disabled={contentLength === 1 && !removeAll}
      >
        Remove
      </button>
    </div>
  );
};

export default AddRemoveButton;
