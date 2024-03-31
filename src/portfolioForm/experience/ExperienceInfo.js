import React from "react";
import { FormLabel, Input, TextField } from "@mui/material";

const ExperienceInfo = ({ data, setExperienceInfo }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 w-full">
        <div className="flex flex-col gap-1">
          <div>
            <FormLabel htmlFor="name">Company</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <Input
            disableUnderline
            value={data.company}
            onChange={(e) => {
              setExperienceInfo({ ...data, company: e.target.value });
            }}
            id="name"
            placeholder="Name"
            required
            className="px-2 border rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <FormLabel htmlFor="email">Role</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <Input
            disableUnderline
            id="text"
            value={data.role}
            onChange={(e) => {
              setExperienceInfo({ ...data, role: e.target.value });
            }}
            placeholder="Role"
            required
            type="text"
            className="px-2 border rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <FormLabel htmlFor="phone">Location</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <Input
            disableUnderline
            value={data.location}
            onChange={(e) => {
              setExperienceInfo({ ...data, location: e.target.value });
            }}
            id="location"
            placeholder="New Delhi"
            required
            type="text"
            className="px-2 border rounded-md border-gray-400 hover:border-gray-500"
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
                  setExperienceInfo({ ...data, from: e.target.value });
                }}
                id="from"
                placeholder="from"
                type="date"
                className="px-2 border rounded-md border-gray-400"
              />
            </div>
            <div className="flex justify-around text-center w-full sm:w-auto">
              <span className="whitespace-pre self-center">to : </span>
              <Input
                disableUnderline
                value={data.to}
                onChange={(e) => {
                  setExperienceInfo({ ...data, to: e.target.value });
                }}
                id="to"
                placeholder="to"
                type="date"
                className="px-2 border rounded-md border-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <FormLabel htmlFor="description">Description {"(Min 20 Letters)"}</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <TextField
            multiline
            minRows={3}
            value={data.description}
            onChange={(e) => {
              setExperienceInfo({ ...data, description: e.target.value });
            }}
            focused={false}
            id="description"
            placeholder="Description"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceInfo;
