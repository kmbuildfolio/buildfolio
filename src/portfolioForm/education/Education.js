import React, { useState } from "react";
import EducationInfo from "./EducationInfo";
import { CardContent } from "@mui/material";
import FormJumpButton from "../FormJumpButton";
import AddRemoveButton from "../AddRemoveButton";
import { matches } from "validator";
import { useRef } from "react";

const Education = (props) => {
  const formRef = useRef();
  const { setCurrFormNum, data, setEducation } = props;
  const [educationInfo, setEducationInfo] = useState(data);
  var error = false;
  const [errorMsg,setErrorMsg] = useState(null);

  const updateEducation = (index, obj) => {
    setEducationInfo((prev) => {
      const updatedEducation = [...prev];
      updatedEducation[index] = obj;
      return updatedEducation;
    });
  };

  const confirmEducation = () => {
    error = false;
    setErrorMsg(null);
    try{
      for(var i = 0; i < educationInfo.length; i++){
        if(!matches(educationInfo[i].course,/^.{3,40}$/)){
          throw Error("Course length must between 3 to 40");
        }
        else if(!matches(educationInfo[i].university,/^.{5,40}$/)){
          throw Error("University length must between 5 to 40");
        }
        else if(!matches(educationInfo[i].institution,/^.{5,40}$/)){
          throw Error("Institution length must between 5 to 50");
        }
        else if(!matches(educationInfo[i].location,/^.{3,40}$/)){
          throw Error("Location length must between 3 to 40");
        }
      }
      setEducation(educationInfo);
      return true;
    }
    catch(err){
      error = true;
      setErrorMsg(err.message);
      scrollToTop();
      return false;
    }
  };

  const changeEducationInfo = (flag) => {
    if (flag) {
      setEducationInfo((prev) => [
        ...prev,
        { course: "",university:"", institution: "", location: "", to: "", from: "" },
      ]);
    } else {
      setEducationInfo(educationInfo.slice(0, -1));
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
        {educationInfo.map((data, key) => (
          <div key={key}>
            <EducationInfo
              data={data}
              updateEducation={(obj) => updateEducation(key, obj)}
            />
            {key !== educationInfo.length - 1 && (
              <hr className="border-gray-700 my-4" />
            )}
          </div>
        ))}
        <AddRemoveButton
          changeContent={(flag) => changeEducationInfo(flag)}
          min={1}
          max={4}
          contentLength={educationInfo.length}
        />
      </CardContent>
      <FormJumpButton
        setCurrFormNum={setCurrFormNum}
        confirmData={confirmEducation}
      />
    </div>
  );
};

export default Education;
