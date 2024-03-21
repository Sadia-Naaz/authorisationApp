import { Tabs } from "antd";
import SignUp from "./SignUp"
import Login from  "./Login"
import "./entry.scss";
const tabs = [
    {
      key:"SignUp",label:"SignUp",children:<SignUp/>
    },
    {
     key :"login",label:"login",children:<Login/>
    }
];
 export const Entry = () =>{
    return(
       
            <div className="form-container">
                <Tabs items={tabs} defaultActiveKey="SignUp"/>
            </div>

      
    )
}