
import { Entry } from "./component/entry";

import { PrivateLayout } from "./component/privatelayout";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Suspense, lazy } from "react";

const Dashboard = lazy(()=>import("./component/dashboard"));
 const App = ()=>{
 

    return(
    
          <div className="App-container">
          <h1>Welcome to Authorization App</h1>
          <a href="./entry">please click here to sign Up or Login</a>
          
          {/* why Link attribute is not working here? */}
        <BrowserRouter>
        <Routes>
          <Route path="/entry" element = {<Entry/>}/>
          <Route path ="" element={<PrivateLayout/>} >
          <Route path ="/dashboard" element = {<Suspense fallback={<h1>Loading....</h1>}><Dashboard/></Suspense>}/>
          <Route path="/users" element={<h1>Users</h1>}/>
          <Route path="*" element={<h1>404 Error...</h1>}/>
          </Route>
         <Route path="*" element={<h1>404 Error...</h1>}/>
        </Routes>
       
        </BrowserRouter>
        </div>
    )
 }
 export default App;