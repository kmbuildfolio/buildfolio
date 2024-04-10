import { CardContent } from "@mui/material";
import React, { useState } from "react";
import ProjectInfo from "./ProjectInfo";
import FormJumpButton from "../FormJumpButton";
import AddRemoveButton from "../AddRemoveButton";
import { matches } from "validator";

const Projects = (props) => {
  const { setCurrFormNum, data, setProjects } = props;
  const [projectInfo, setProjectInfo] = useState(data);
  var error = false;
  const [errorMsg, setErrorMsg] = useState(null);
  
  const confirmData = () => {
    error = false;
    setErrorMsg(null);
    for(var i = 0; i < projectInfo.length; i++){
      if(!matches(projectInfo[i].name,/^.{3,25}$/) || !matches(projectInfo[i].tech,/^.{5,50}$/) || !matches(projectInfo[i].description,/^.{20,200}$/s)){
        error = true;
        setErrorMsg("fill mandatory fields properly");
        return false;
      }
    }
    setProjects(projectInfo);
    return true;
  };

  const updateProjects = (index, obj) => {
    setProjectInfo((prev) => {
      const updatedProjects = [...prev];
      updatedProjects[index] = obj;
      return updatedProjects;
    });
  };

  const changeProjectInfo = (flag) => {
    if (flag) {
      setProjectInfo((prev) => [
        ...prev,
        { name: "", tech: "", url: "",image:"",code:"", description: "" },
      ]);
    } else {
      setProjectInfo(projectInfo.slice(0, -1));
    }
  };

  return (
    <div>
      <CardContent className="flex flex-col">
      {errorMsg && <span className="text-[#ff3333] text-sm self-center">{errorMsg}</span>}
        {projectInfo.map((data, key) => (
          <div key={key}>
            <ProjectInfo
              data={data}
              updateProjects={(obj) => updateProjects(key, obj)}
            />
            {key !== projectInfo.length - 1 && (
              <hr className="my-2 border-gray-700" />
            )}
          </div>
        ))}
        <AddRemoveButton
          changeContent={(flag) => changeProjectInfo(flag)}
          min={0}
          max={5}
          contentLength={projectInfo.length}
        />
      </CardContent>
      <FormJumpButton
        setCurrFormNum={setCurrFormNum}
        confirmData={confirmData}
      />
    </div>
  );
};

export default Projects;