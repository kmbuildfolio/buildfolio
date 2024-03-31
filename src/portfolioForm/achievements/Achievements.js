import React, { useEffect, useState } from "react";
import AchievementsInfo from "./AchievementsInfo";
import { Card, CardContent } from "@mui/material";
import FormJumpButton from "../FormJumpButton";
import AddRemoveButton from "../AddRemoveButton";

const Achievements = (props) => {
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

    for(var i = 0; i < achievementsInfo.length; i++){
      if(achievementsInfo[i].name.length < 3 || achievementsInfo[i].description.length < 20){
        error = true;
        setErrorMsg("fill mandatory fields properly");
        return false;
      }
    }
    setAchievements(achievementsInfo);
    return true;
  };

  return (
    <div>
      <CardContent className="flex flex-col">
      {errorMsg && <span className="text-[#ff3333] text-sm self-center">{errorMsg}</span>}
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
