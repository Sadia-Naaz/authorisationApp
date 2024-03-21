import { Spin, message } from "antd";
import { getAllUsers } from "../network/api";
import { useEffect, useState } from "react"; 
import"./table.scss";

 const Dashboard =() =>{
    const[users,setUsers]=useState([]);
    const[error,setError]=useState("");
    const[apiStatus,setApiStatus]=useState("Pending");
    const fetchdata =()=>{
          getAllUsers(({success,data,message})=>{
           if(success){
       
           setUsers(data);
           setApiStatus("success");
            }else{
                setError(message);
                setApiStatus("error");
            }
            })
    }
useEffect(()=>{
  fetchdata();

 },
 []);
if(apiStatus==="Pending") return<Spin size="large"/>

if(apiStatus==="error") return <div><b>{error}</b><button  onClick={fetchdata}>Reload</button></div>

const columns = users.length>0 ? Object.keys(users[0]):[];
return(<table style={{width:"100%"}} className="table">
    <thead>
        <tr>
            {columns.map(column=>{
                return<th key={column}>{column}</th>
            })}
        </tr>
    </thead>
    <tbody>{
         users.map((user) => {
            return(
            <tr> {columns.map(column=>{
                return(<td>{user[column]}</td>)
         })}</tr>
                )
       
        
          })
        }
    </tbody>
</table>)
} 
export default Dashboard;