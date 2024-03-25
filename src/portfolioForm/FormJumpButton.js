import React from "react";

const FormJumpButton = ({
  setCurrFormNum,
  disableNext,
  disablePrev,
  confirmData,
  onSubmit,
  onUpdate
}) => {
  return (
    <div>
      <div className="flex justify-between mx-2 my-2">
        <button
          className="bg-blue-700 px-4 py-1 rounded-md text-white
         hover:bg-blue-500"
          disabled={disablePrev}
          onClick={() => {
            confirmData();
            setCurrFormNum((prev) => prev - 1);
          }}
        >
          Prev
        </button>

        {disableNext ? (
          <button
            className="bg-green-800 px-4 py-1 rounded-md text-white
        hover:bg-green-500"
            onClick={() => {
              if(confirmData()){
                if(onUpdate){
                  onUpdate()
                }else{
                  onSubmit();
                }
              }
            }}
          >
            {onUpdate ? <>Update</> : <>Submit</>}
          </button>
        ) : (
          <button
            className="bg-blue-700 px-4 py-1 rounded-md text-white
     hover:bg-blue-500"
            onClick={() => {
              if(confirmData()){
                setCurrFormNum((prev) => prev + 1);
              }
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FormJumpButton;
