import { privateAxios, myAxios } from "./helper";

export const savePortfolioForm = async (portfolio) =>{
    try{
        const response = await privateAxios.post(
            `/api/portfolio/save`, portfolio
        );
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export const userLogin = async (authCredential)=>{
    try{
        const response = await myAxios.post(
            `/api/public/user_login`, authCredential
        );
        return response.data;
    }
    catch(err){
        throw err;
    }
}

export const savePerson = async (person,OTP) =>{
    try{
        const response = await myAxios.post(
            `/api/public/save/user?otp=${OTP}`, person
        );
        return response.data;
    }
    catch(err){
        throw err;
    }
}

export const verifyUserStatus = async (email, userName) =>{
    try{
        const res = await myAxios.get(`/api/public/verify/user-status?email=${email}&&username=${userName}`);
        return res.data;
    }
    catch(err){
        throw err;
    }
}

export const getPortfolio = async () =>{
    try{
        const res = await privateAxios.get("/api/portfolio/get");
        return res.data;
    }
    catch(err){
        throw err;
    }
}

export const getPortfolioByUsername = async (username) =>{
    try{
        const res = await privateAxios.get(`/api/public/portfolio/get?username=${username}`);
        return res.data;
    }
    catch(err){
        throw err;
    }
}

export const updatePortfolio = async (portfolio) =>{
    try{
        const response = await privateAxios.put(
            `/api/portfolio/update`, portfolio
        );
        return response.data;
    }
    catch(error){
        throw error;
    }
}