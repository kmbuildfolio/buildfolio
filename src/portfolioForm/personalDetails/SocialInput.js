import React, { useState } from "react";
import { Input } from "@mui/material";

const SocialInput = ({data, onChangeSocial}) => {
  return (
    <div>
      <div className="flex justify-between gap-1">
        <Input
          disableUnderline
          id="website"
          placeholder="Github"
          value={data.key}
          onChange={(e)=>{onChangeSocial({...data,key:e.target.value})}}
          type="url"
          className="px-2 border rounded-md border-gray-400"
        />
        <Input
          disableUnderline
          id="website"
          placeholder="URL"
          value={data.value}
          onChange={(e)=>{onChangeSocial({...data,value:e.target.value})}}
          type="url"
          className="px-2 border rounded-md border-gray-400"
        />
      </div>
    </div>
  );
};

export default SocialInput;
