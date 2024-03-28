import React from "react";

const AddRemoveButton = ({changeContent, contentLength, min, max}) => {
  return (
    <div className="flex justify-between mt-2">
      {contentLength < max && <button
        className="bg-black px-7 py-1 rounded-md 
                text-white"
        onClick={()=>{changeContent(true)}}
      >
        ADD
      </button>}
      {contentLength > min && <button
        className="bg-black px-4 py-1 rounded-md
                 text-white hover:bg-gray-800"
        onClick={()=>{changeContent(false)}}
      >
        Remove
      </button>}
    </div>
  );
};

export default AddRemoveButton;
