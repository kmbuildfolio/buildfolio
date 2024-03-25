import { Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectInfo from "./ProjectInfo";
import FormJumpButton from "../FormJumpButton";
import AddRemoveButton from "../AddRemoveButton";

const Projects = (props) => {
  const { setCurrFormNum, data, setProjects } = props;
  const [projectInfo, setProjectInfo] = useState(data);
  var error = false;
  const [errorMsg, setErrorMsg] = useState(null);
  
  const confirmData = () => {
    error = false;
    setErrorMsg(null);
    for(var i = 0; i < projectInfo.length; i++){
      if(projectInfo[i].name.length < 3 || projectInfo[i].tech.length < 3 || projectInfo[i].description.length < 20){
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
      {errorMsg && <span className="text-[#ff3333]">{errorMsg}</span>}
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
          contentLength={projectInfo.length}
          removeAll={true}
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