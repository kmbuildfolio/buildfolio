import React, { useState } from "react";
import AchievementsInfo from "./AchievementsInfo";
import { CardContent } from "@mui/material";
import FormJumpButton from "../FormJumpButton";
import AddRemoveButton from "../AddRemoveButton";
import { matches } from "validator";
import { useRef } from "react";

const Achievements = (props) => {
  const formRef = useRef();
  const { setCurrFormNum, data, setAchievements, onSubmit, onUpdate } = props;
  const [achievementsInfo, setAchievementsInfo] = useState(data);
  var error = false;
  const [errorMsg, setErrorMsg] = useState(null);
  
  const changeAchievementsInfo = (flag) => {
    if (flag) {
      setAchievementsInfo((prev) => [...prev, { name: "", description: "" }]);
    } else {
      setAchievementsInfo(achievementsInfo.slice(0, -1));
    }
  };

  const updateAchievementsInfo = (index, obj) => {
    setAchievementsInfo((prev) => {
      const updatedAchievements = [...prev];
      updatedAchievements[index] = obj;
      return updatedAchievements;
    });
  };

  const confirmAchievements = () => {
    error = false;
    setErrorMsg(null);

    try{
      for(var i = 0; i < achievementsInfo.length; i++){
        if(!matches(achievementsInfo[i].name,/^.{3,25}$/)){
          throw Error("Achievement Name must between 3 to 25");
        }
        else if(!matches(achievementsInfo[i].description,/^.{20,200}$/)){
          throw Error("Description must between 20 to 200");
        }
      }
      setAchievements(achievementsInfo);
      return true;
    }
    catch(err){
      error = true;
        setErrorMsg(err.message);
        scrollToTop();
        return false;
    }
  };

  const scrollToTop = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <CardContent className="flex flex-col" ref={formRef}>
      {errorMsg && <span className="text-[#ff3333] text-sm self-center mb-4">{errorMsg}</span>}
        {achievementsInfo.map((data, key) => (
          <div key={key}>
            <AchievementsInfo
              data={data}
              updateAchievements={(obj) => updateAchievementsInfo(key, obj)}
            />
            {key !== achievementsInfo.length - 1 && (
              <hr className="my-4 border-gray-700" />
            )}
          </div>
        ))}
        <AddRemoveButton
          changeContent={(flag) => changeAchievementsInfo(flag)}
          min={0}
          max={4}
          contentLength={achievementsInfo.length}
        />
      </CardContent>
      <FormJumpButton
        setCurrFormNum={setCurrFormNum}
        disableNext={true}
        onSubmit={onSubmit}
        confirmData={confirmAchievements}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default Achievements;
