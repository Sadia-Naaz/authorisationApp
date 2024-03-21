import { useEffect } from "react";
import { Outlet,Link, useNavigate } from "react-router-dom"

export const PrivateLayout = ()=>{

  const isLoggedIn  = Boolean(localStorage.getItem("token"));
  const navigate = useNavigate();
  

//it will redirect the user to the login page after 3 sec
// useEffect(()=>{

//       if(!isLoggedIn){
//       setTimeout(()=>{
//       navigate("/entry")
//       },3000)
//       }
// },[isLoggedIn])

if(!isLoggedIn){ //dashboard is not visible instaed a link can be seen...
    return(
        <Link to={"./entry"}>please login first</Link>
    )
}
 
    return(
        <>
        <Outlet/>
        </>
    )
}