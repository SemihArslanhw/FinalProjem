import React,{useState} from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register"
import { ToastContainer } from 'react-toastify'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CompanyPage from "./pages/company";
import Createcompany from "./pages/createcompany";


function App() {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <>
    
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/profile/:username">
            
          </Route>
         
          <Route path="/giris">
          {user ? <Redirect to="/"/> :<Login/>} 
          </Route>
          <Route path="/kayıt">
          {user ? <Redirect to="/"/> :<Register/>}
          </Route>
          <Route path="/category/:categoryname">

          </Route>
          <Route path="/company" exact >
          {!user ? <Redirect to="/giris"/> :<CompanyPage/>}
          </Route>
          <Route path="/company/createcompany">
          {!user ? <Redirect to="/giris"/> :<Createcompany/>}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
