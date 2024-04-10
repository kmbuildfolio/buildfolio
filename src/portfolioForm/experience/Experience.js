import { CardContent, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormJumpButton from "../FormJumpButton";
import ExperienceInfo from "./ExperienceInfo";
import AddRemoveButton from "../AddRemoveButton";
import { matches } from "validator";

const Experience = (props) => {
  const { setCurrFormNum, data, setExperience } = props;
  const [experienceInfo, setExperienceInfo] = useState(data);
  var error = false;
  const [errorMsg, setErrorMsg] = useState(null);

  const updateExperienceInfo = (index, obj) => {
    setExperienceInfo((prev) => {
      const updatedExperienceInfo = [...prev];
      updatedExperienceInfo[index] = obj;
      return updatedExperienceInfo;
    })
  }

  const setConfirmData = () => {
    error = false;
    setErrorMsg(null);
    for(var i = 0; i < experienceInfo.length; i++){
      if(!matches(experienceInfo[i].company,/^.{3,25}$/) || !matches(experienceInfo[i].role,/^.{3,10}$/) || !matches(experienceInfo[i].location,/^.{3,10}$/) || !matches(experienceInfo[i].description,/^.{20,200}$/s)){
        error = true;
        setErrorMsg("fill mandatory fields properly")
        return false;
      }
    }
    setExperience(experienceInfo);
    return true;
  }

  const changeExperienceInfo = (flag) => {
    if (flag) {
      setExperienceInfo((prev) => [
        ...prev,
        { company: "", role: "", location: "", from: "", to: "", description: "" },
      ]);
    } else {
      setExperienceInfo(experienceInfo.slice(0, -1));
    }
  };
  return (
    <div>
      <CardContent className="flex flex-col">
      {errorMsg && <span className="text-[#ff3333] text-sm self-center">{errorMsg}</span>}
        {experienceInfo.map((data, key) => (
          <div key={key}>
            <ExperienceInfo
              data={data}
              setExperienceInfo={(obj) => updateExperienceInfo(key, obj)}
            />
            {experienceInfo.length - 1 !== key && (
              <hr className="border-gray-700 my-4" />
            )}
          </div>
        ))}
        <AddRemoveButton
          changeContent={(flag) => {
            changeExperienceInfo(flag);
          }}
          min={0}
          max={4}
          contentLength={experienceInfo.length}
        />
      </CardContent>
      <FormJumpButton setCurrFormNum={setCurrFormNum} confirmData={setConfirmData} />
    </div>
  );
};

export default Experience;
