import React from "react";
import { FormLabel, Input } from "@mui/material";
const EducationInfo = ({ data, updateEducation }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 w-full">
        <div className="flex flex-col gap-1">
          <div>
          <FormLabel htmlFor="name">Course {"(3-40 Letters)"}</FormLabel>
          <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <Input
            disableUnderline
            value={data.course}
            onChange={(e) => {
              updateEducation({ ...data, course: e.target.value });
            }}
            id="name"
            placeholder="Name"
            required
            className="px-2 border rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>
          <FormLabel htmlFor="name">University {"(5-40 Letters)"}</FormLabel>
          <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <Input
            disableUnderline
            value={data.university}
            onChange={(e) => {
              updateEducation({ ...data, university: e.target.value });
            }}
            id="university"
            placeholder="University Name"
            required
            type="name"
            className="px-2 border rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>
          <FormLabel htmlFor="name">Institution {"(5-40 Letters)"}</FormLabel>
          <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <Input
            disableUnderline
            value={data.institution}
            onChange={(e) => {
              updateEducation({ ...data, institution: e.target.value });
            }}
            id="institute"
            placeholder="Institution Name"
            required
            type="name"
            className="px-2 border rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <FormLabel htmlFor="text">Location {"(3-40 Characters)"}</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
          </div>
          
          <Input
            disableUnderline
            value={data.location}
            onChange={(e) => {
              updateEducation({ ...data, location: e.target.value });
            }}
            id="location"
            placeholder="text"
            required
            type="text"
            className="px-2 border rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <FormLabel htmlFor="website">Date</FormLabel>
          <div className="flex justify-between flex-wrap gap-1" id="date">
            <div className="flex justify-around w-full sm:w-auto">
              <span className="whitespace-pre self-center">from : </span>
              <Input
                disableUnderline
                value={data.from}
                onChange={(e) => {
                  updateEducation({ ...data, from: e.target.value });
                }}
                id="from"
                placeholder="from"
                type="date"
                className="px-2 border rounded-md border-gray-400"
              />
            </div>

            <div className="flex justify-around w-full sm:w-auto">
              <span className="whitespace-pre self-center">to : </span>
              <Input
                disableUnderline
                value={data.to}
                onChange={(e) => {
                  updateEducation({ ...data, to: e.target.value });
                }}
                id="to"
                placeholder="to"
                type="date"
                className="px-2 border rounded-md border-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;
