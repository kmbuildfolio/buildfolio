import { privateAxios, myAxios } from "./helper";

export const logoutUser = async () =>{
    try{
        const response = await privateAxios.post(
            `/api/person/logout`
        );
        return response.data;
    }
    catch(err){
        throw err;
    }
}

export const getOTP =async (email) =>{
    try{
        const res = await myAxios.post(`/api/public/send-otp?email=${email}`);
        return res.data;
    }
    catch(err){
        throw err;
    }
}

export const verifyOTP = async (email, OTP) =>{
    try{
        const res = await myAxios.get(`/api/public/verify-otp?email=${email}&&otp=${OTP}`);
        return res.data;
    }
    catch(err){
        throw err;
    }
}

export const sendOTP = async (email) =>{
    try{
        const res = await myAxios.post(`/api/public/send-otp?email=${email}`);
        return res.data;
    }
    catch(err){
        throw err;
    }
}

export const changePassword = async (resetPassword) =>{
    try{
        const res = await myAxios.post(`/api/public/change-pass`,resetPassword);
        return res.data;
    }
    catch(err){
        throw err;
    }
}

export const sendMessage = async (userContact, username) =>{
    try{
        const res = await myAxios.post(`/api/public/contact/send-msg?username=${username}`,userContact);
        return res.data;
    }
    catch(err){
        throw err;
    }
}

export const validateEmail = async (email) =>{
    try{
        const res = await myAxios.get(`/api/public/validate/email?email=${email}`);
        return res.data;
    }
    catch(err){
        throw err;
    }
}