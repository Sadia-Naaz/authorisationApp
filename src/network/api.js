import axios from "axios"


const baseUrl = "https://node-auth-jwt-w78c.onrender.com";
const Endpoints = {
    signup :`${baseUrl}/signup`,
    login:`${baseUrl}/login`,
    users:`${baseUrl}/users`
}

export async function login (logininfo, callback){

try{
    const response = await axios(Endpoints.login, {data:logininfo , method:"POST"});
    if(response.status>=200 && response.status < 300){
      
     const token =  response.data.token ; 
     localStorage.setItem("token",token);
        callback({success:true,message:"Logged In"});
    }
    else{
      callback({success:false , message: response.data.message});
    }

}
catch(error){
    if (error.response) {
        // The request was made and the server responded with a status code
        callback({ success: false, message: `Server responded with status ${error.response.status}` });
    } else if (error.request) {
        // The request was made but no response was received
        callback({ success: false, message: "No response from server" });
    } else {
        // Something happened in setting up the request that triggered an Error
        callback({ success: false, message: error.message });
    }
}

}
//2-
export async function Signup(loginInfo,callback){
   
    try{
       const response = await axios(Endpoints.signup,{data:loginInfo,method:"POST"});
       console.log(response);
       if(response.status >= 200 && response.status < 300){
       const token = response.data.token;
       localStorage.setItem("token",token);
       callback({success:true,message:"User Created Successfully"});
       }else{
      callback({success:false,message:"Failed to create  user"});
       }
    }
    catch(error){
    callback({success:true,message:error.message});
    }

}

//3->
export async function getAllUsers (callback){
    try{
       const response = await axios(Endpoints.users,{
        method:"Get",
        headers:{
        "Authorization":`Bearer :${localStorage.getItem('token')}`,
    }

    })
    if(response.status===200 && response.status < 300){
        callback({success:true, data: response.data.result});
    }
    else{
        callback({success:false, message: response.data.message});
    }

    }
    catch(error){
     callback({success:false, message: error.response?.data?.message ??  error.message});
    }
}