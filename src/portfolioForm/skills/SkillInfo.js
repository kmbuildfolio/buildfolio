import React from "react";
import { Input } from "@mui/material";

const SkillInfo = ({skill,updateSkills}) => {
  
  return (
    <div>
        <Input
          disableUnderline
          value={skill}
          onChange={(e)=>{updateSkills(e.target.value)}}
          id="text"
          placeholder="Java"
          required
          className="px-2 border rounded-md border-gray-400 w-full"
        />
    </div>
  );
};

export default SkillInfo;
