import { Input,Form, Button, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { Signup } from "../network/api";
import { useState } from "react";
// import Password from "antd/es/input/Password";

const SignUp = () =>{
const navigate = useNavigate();
const [isLoading,setIsLoading]=useState(false);
const onFinish=(loginInfo)=>{
setIsLoading(true);
Signup(loginInfo,({success})=>{
    console.log("signed up");
    if(success){
    setIsLoading(false);
    alert("sign up successfully")
    navigate("/dashboard");
 
    }
    else{
     alert("Can not sign up");
    }
})
}
return (
<Form className="signUp-form " layout="vertical" onFinish={onFinish}>

<Form.Item name="name" label="Name" rules={[{required:true ,message:"name is required"}]}>
<Input placeholder="name" /></Form.Item>

<Form.Item name="email" label="Email" rules={[{type:"email",message:"invalid email"},{required:true,message:"email is a required field"}]}>
<Input/>
</Form.Item>
<Form.Item name="password" label="Password" rules={[{type:"password",message:"invalid password"},
{required:true,message:"password is required"}]}>
<Input.Password/></Form.Item>

<Form.Item name="city" label="City" rules={[{required:true,message:"city is required"}]}>
<Input placeholder="city"/></Form.Item>
<Form.Item name="gender" label="Gender" rules={[{required:true,message:"Gender is required field"}]}>
    <Radio.Group>
        <Radio value={"MALE"}>MALE</Radio>
        <Radio value={"FEMALE"}>FEMALE</Radio>
        <Radio value={"OTHER"}>OTHER</Radio>
    </Radio.Group>
</Form.Item>
<Button  loading={isLoading} htmlType="submit" type="primary">SignUp</Button>
</Form>


    )
}
export default SignUp;