import React, { useState } from "react";
import SkillInfo from "./SkillInfo";
import { CardContent } from "@mui/material";
import FormJumpButton from "../FormJumpButton";
import AddRemoveButton from "../AddRemoveButton";
import { matches } from "validator";
import { useRef } from "react";

const Skills = (props) => {
  const formRef = useRef();
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
      if(!matches(skillsInfo[i],/^.{2,20}$/)){
        error = true;
        setErrorMsg("Skill must contains 2-20 Characters");
        scrollToTop();
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
