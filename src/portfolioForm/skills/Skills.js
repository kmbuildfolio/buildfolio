import React, { useEffect, useState } from "react";
import SkillInfo from "./SkillInfo";
import { Card, CardContent } from "@mui/material";
import FormJumpButton from "../FormJumpButton";
import AddRemoveButton from "../AddRemoveButton";
import ProjectInfo from "../projects/ProjectInfo";

const Skills = (props) => {
  const { setCurrFormNum, data, setSkills } = props;
  const [skillsInfo, setSkillsInfo] = useState(data);
  var error = false;
  const [errorMsg,setErrorMsg] = useState(null);

  const updateSkills = (index, name) => {
    setSkillsInfo((prev) => {
      const updatedSkills = [...prev];
      updatedSkills[index] = name;
      return updatedSkills;
    });
  };

  const confirmSkills = () => {
    error = false;
    setErrorMsg(null);
    for(var i = 0; i < skillsInfo.length; i++){
      if(skillsInfo[i].length < 2){
        error = true;
        setErrorMsg("fill mandatory fields properly");
        return false;
      }
    }
    setSkills(skillsInfo);
    return true;
  };

  const changeSkillsInfo = (flag) => {
    if (flag) {
      setSkillsInfo((prev) => [...prev, ""]);
    } else {
      setSkillsInfo(skillsInfo.slice(0, -1));
    }
  };
  return (
    <div>
      <CardContent className="flex flex-col">
      {errorMsg && <span className="text-[#ff3333] text-sm self-center">{errorMsg}</span>}
        <div className="grid grid-rows-1 gap-4 w-full">
          {skillsInfo.map((skill, key) => (
            <div key={key}>
              <SkillInfo
                skill={skill}
                updateSkills={(name) => updateSkills(key, name)}
              />
            </div>
          ))}
        </div>
        <AddRemoveButton
          changeContent={(flag) => changeSkillsInfo(flag)}
          min={1}
          max={15}
          contentLength={skillsInfo.length}
        />
      </CardContent>
      <FormJumpButton
        setCurrFormNum={setCurrFormNum}
        confirmData={confirmSkills}
      />
    </div>
  );
};

export default Skills;
