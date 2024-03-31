import { CardContent, TextField } from "@mui/material";
import { FormLabel } from "@mui/material";
import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import SocialInput from "./SocialInput";
import FormJumpButton from "../FormJumpButton";
import AddRemoveButton from "../AddRemoveButton";

const PersonalDetails = (props) => {
  const { setCurrFormNum, setBio, data } = props;
  const [biodata, setBiodata] = useState(data);
  const [errorMsg, setErrorMsg] = useState(null);
  var error = false;

  useEffect(()=>{
    setBiodata(data);
  },[data]);

  const setConfirmData = () => {
    setErrorMsg(null);
    error = false;
    if(biodata.name.length < 3 || biodata.email.length < 3 || biodata.phone.length < 10 || biodata.address.length < 5 || biodata.description.length < 20){
      setErrorMsg("fill mandatory fields properly")
      error = true;
    }
    for(var i = 0; i < biodata.socials.length; i++){
      if(biodata.socials[i].key.length < 2 || biodata.socials[i].value.length < 5){
        setErrorMsg("fill mandatory fields properly")
        error = true;
      }
    }
    if(!error){
      setBio(biodata);
    }
    return !error;
  };

  const updateBio = (flag) => {
    if (flag) {
      setBiodata({
        ...biodata,
        socials: [...biodata.socials, { key: "", value: "" }],
      });
    } else {
      setBiodata((prevState) => {
        const updatedBiodata = { ...prevState };
        updatedBiodata.socials = updatedBiodata.socials.slice(0, -1);
        return updatedBiodata;
      });
    }
  };

  const onChangeSocial = (index, obj) => {
    setBiodata((prev) => {
      const data = { ...prev };
      data.socials[index] = obj;
      return data;
    });
  };

  return (
    <div>
      <CardContent className="flex flex-col">
      {errorMsg && <span className="text-[#ff3333] text-sm self-center">{errorMsg}</span>}
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="flex flex-col gap-1">
            <div>
               <FormLabel htmlFor="name">Name</FormLabel>
               <span className="text-red-900 text-[18px]"> *</span>
            </div>
            <Input
              disableUnderline
              value={biodata.name}
              id="name"
              onChange={(e) => { setBiodata({ ...biodata, name: e.target.value }) }}
              placeholder="Name"
              className="px-2 border rounded-md border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
            <FormLabel htmlFor="email">Email</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
            </div>
            <Input
              disableUnderline
              id="email"
              value={biodata.email}
              onChange={(e) => { setBiodata({ ...biodata, email: e.target.value }) }}
              placeholder="Email"
              required
              type="email"
              className="px-2 border rounded-md border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
            </div>
            <Input
              disableUnderline
              id="phone"
              placeholder="Phone"
              value={biodata.phone}
              onChange={(e) => { setBiodata({ ...biodata, phone: e.target.value }) }}
              required
              type="tel"
              className="px-2 border rounded-md border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
            <FormLabel htmlFor="address">Address</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
            </div>
            <Input
              disableUnderline
              value={biodata.address}
              onChange={(e) => { setBiodata({ ...biodata, address: e.target.value }) }}
              id="address"
              placeholder="Address"
              type="text"
              className="px-2 border rounded-md border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
            <FormLabel htmlFor="social">Social</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
            </div>
            {biodata.socials.map((data, key) => (
              <div key={key}>
                <SocialInput
                  data={data}
                  onChangeSocial={(obj) => {
                    onChangeSocial(key, obj);
                  }}
                />
              </div>
            ))}
          </div>
          <AddRemoveButton
            changeContent={(flag) => updateBio(flag)}
            min={1}
            max={8}
            contentLength={biodata.socials.length}
          />
          <div className="flex flex-col gap-1">
            <div>
            <FormLabel htmlFor="social">Description {"(Min 20 Letters)"}</FormLabel>
            <span className="text-red-900 text-[18px]"> *</span>
            </div>
            <TextField
              multiline
              value={biodata.description}
              onChange={(e) => { setBiodata({ ...biodata, description: e.target.value }) }}
              minRows={3}
              focused={false}
              id="description"
              placeholder="Description"
              type="text"
            />
          </div>
        </div>
      </CardContent>
      <FormJumpButton
        confirmData={setConfirmData}
        setCurrFormNum={setCurrFormNum}
        disablePrev={true}
      />
    </div>
  );
};

export default PersonalDetails;
