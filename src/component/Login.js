import {useNavigate} from "react-router-dom";
import { Input,Form, Button } from "antd";
import { login } from "../network/api";
import { useState } from "react";


const Login  = () =>{
    const navigate = useNavigate();
    const [isLoading, setIsLoading]= useState(false);
    const onFinish = (loginInfo) =>{
        setIsLoading(true);
        login(loginInfo,({success})=>{
          setIsLoading(false);
          if(success){
            navigate("/dashboard");
          }
          else{
            alert("Login failed try again....");
          }
        })
     }
    return(
        <Form onFinish={onFinish} className="login-form form" layout="vertical">
        <Form.Item label="Username" name="email"
        rules={[{type:"email",message:"invalid email"},{required:true,message:"Email is required!"}]}>
        <Input placeholder="Username" />
        </Form.Item>
        <Form.Item label="Password" name="password" 
        rules={[{type:"password",message:"Invalid password"},{required:true, message:"invalid password!"}]}>
        <Input.Password placeholder="password"/>
        </Form.Item>
        <div style={{display:"flex", justifyContent:"center" }}>
        <Button  loading={isLoading}  type="primary"  htmlType="submit" >Login</Button>
        </div>
       </Form>
    )
}
export default Login;