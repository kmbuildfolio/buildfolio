import { CardContent } from "@mui/material";
import React, { useState } from "react";
import ProjectInfo from "./ProjectInfo";
import FormJumpButton from "../FormJumpButton";
import AddRemoveButton from "../AddRemoveButton";
import { matches } from "validator";
import { useRef } from "react";

const Projects = (props) => {
  const formRef = useRef();
  const { setCurrFormNum, data, setProjects } = props;
  const [projectInfo, setProjectInfo] = useState(data);
  var error = false;
  const [errorMsg, setErrorMsg] = useState(null);
  
  const confirmData = () => {
    error = false;
    setErrorMsg(null);
    try{
      for(var i = 0; i < projectInfo.length; i++){
        if(!matches(projectInfo[i].name,/^.{3,25}$/)){
          throw Error("Project Name length must between 3 to 25");
        }
        else if(!matches(projectInfo[i].tech,/^.{5,50}$/)){
          throw Error("Tech Stack length must between 5 to 50");
        }
        else if(!matches(projectInfo[i].description,/^.{20,200}$/s)){
          throw Error("Description length must between 20 to 200");
        }
      }
      setProjects(projectInfo);
      return true;
    }
    catch(err){
        setErrorMsg(err.message);
        error = true;
        scrollToTop();
        return false;
    }
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