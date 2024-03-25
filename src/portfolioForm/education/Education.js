import React, { useEffect, useState } from "react";
import EducationInfo from "./EducationInfo";
import { Card, CardContent } from "@mui/material";
import FormJumpButton from "../FormJumpButton";
import AddRemoveButton from "../AddRemoveButton";

const Education = (props) => {
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
    for(var i = 0; i < educationInfo.length; i++){
      if(educationInfo[i].course.length < 3 || educationInfo[i].institution.length < 3 || educationInfo[i].location.length < 3){
        error = true;
        setErrorMsg("fill mandatory fields properly");
        return false
      }
    }
    setEducation(educationInfo);
    return true;
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
  return (
    <div>
      <CardContent className="flex flex-col">
      {errorMsg && <span className="text-[#ff3333]">{errorMsg}</span>}
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
          contentLength={educationInfo.length}
          removeAll={false}
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
