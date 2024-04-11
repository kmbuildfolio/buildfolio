import { TrashIcon } from "@heroicons/react/solid";
import { TextField } from "@mui/material";
import { FormLabel } from "@mui/material";
import { Input } from "@mui/material";
import React from "react";

const ProjectInfo = ({ data, updateProjects }) => {
  const handleFileChange = (event, callback) => {
    const file = event.target.files[0];
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }
    if (file.size > 1048576) {
      alert('Please select a file smaller than 1 MB.');
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      const imageData = reader.result;
      callback(imageData);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 w-full">
        <div className="flex flex-col gap-1">
          <div>
            <FormLabel htmlFor="name">Project Name</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <Input
            disableUnderline
            value={data.name}
            onChange={(e) => {
              updateProjects({ ...data, name: e.target.value });
            }}
            id="name"
            placeholder="Name"
            required
            className="px-2 border rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1 justify-between w-full">
            <FormLabel>Project Image/GIF :</FormLabel>
          <div>
            {!data.image ? (
              <Input
                className="cursor-pointer"
                disableUnderline
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleFileChange(e, (imageData) => {
                    updateProjects({ ...data, image: imageData });
                  });
                }}
              />
            ) : (
              <div className="flex justify-between">
                <img src={data.image} width={100} />
                <TrashIcon
                  width={30}
                  className="cursor-pointer"
                  onClick={() => {
                    updateProjects({ ...data, image: null });
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <FormLabel htmlFor="email">Tech Stack</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <Input
            disableUnderline
            value={data.tech}
            onChange={(e) => {
              updateProjects({ ...data, tech: e.target.value });
            }}
            id="text"
            placeholder="Java, MongoDB"
            required
            type="text"
            className="px-2 border rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <FormLabel htmlFor="url">Live Link</FormLabel>
          <Input
            disableUnderline
            value={data.url}
            onChange={(e) => {
              updateProjects({ ...data, url: e.target.value });
            }}
            id="url"
            placeholder="Live Link"
            required
            type="url"
            className="px-2 border rounded-md border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <FormLabel htmlFor="url">Code</FormLabel>
          <Input
            disableUnderline
            value={data.code}
            onChange={(e) => {
              updateProjects({ ...data, code: e.target.value });
            }}
            id="url"
            placeholder="GitHub Link"
            required
            type="url"
            className="px-2 border rounded-md border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div>
            <FormLabel htmlFor="social">Description</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
          </div>
          <TextField
            multiline
            value={data.description}
            onChange={(e) => {
              updateProjects({ ...data, description: e.target.value });
            }}
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
};

export default ProjectInfo;
