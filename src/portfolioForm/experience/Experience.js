import { CardContent, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormJumpButton from "../FormJumpButton";
import ExperienceInfo from "./ExperienceInfo";
import AddRemoveButton from "../AddRemoveButton";
import { matches } from "validator";
import { useRef } from "react";

const Experience = (props) => {
  const formRef = useRef();
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
    try{
      for(var i = 0; i < experienceInfo.length; i++){
        if(!matches(experienceInfo[i].company,/^.{3,25}$/)){
          throw Error("Company length must between 3 to 25");
        }
        else if(!matches(experienceInfo[i].role,/^.{3,10}$/)){
          throw Error("Role length must between 3 to 10");
        }
        else if(!matches(experienceInfo[i].location,/^.{3,40}$/)){
          throw Error("Location length must between 3 to 40");
        }
        else if(!matches(experienceInfo[i].description,/^.{20,200}$/s)){
          throw Error("Description length must between 20 to 200");
        }
      }
      setExperience(experienceInfo);
      return true;
    }
    catch(err){
      setErrorMsg(err.message);
      error = true;
      scrollToTop();
      return false;
    }
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

  const scrollToTop = () =>{
    formRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
}

  return (
    <div>
      <CardContent className="flex flex-col" ref={formRef}>
      {errorMsg && <span className="text-[#ff3333] text-sm self-center mb-4">{errorMsg}</span>}
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
