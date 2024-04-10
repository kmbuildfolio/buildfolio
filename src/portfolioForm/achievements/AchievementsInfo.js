import React from 'react'
import { FormLabel, Input, TextField } from '@mui/material';

const AchievementsInfo = ({ data, updateAchievements }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 w-full">
        <div className="flex flex-col gap-1">
          <div>
            <FormLabel htmlFor="name">Achievement Name {"(3-25 Letters)"}</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <Input
            disableUnderline
            value={data.name}
            onChange={(e) => { updateAchievements({ ...data, name: e.target.value }) }}
            id="name"
            placeholder="Name"
            required
            className="px-2 border rounded-md border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div>
            <FormLabel htmlFor="social">Description {"(20-200 Characters)"}</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <TextField
            multiline
            value={data.description}
            onChange={(e) => { updateAchievements({ ...data, description: e.target.value }) }}
            minRows={3}
            focused={false}
            id="description"
            placeholder="Description"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default AchievementsInfo