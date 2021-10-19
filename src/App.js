import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbars";

import './App.css';
import Home from "./components/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import Register from "./components/LoginFrom/Register";
import Login from "./components/LoginFrom/Login";
import Details from "./components/GeneralServices/Details";
import NotFounds from "./components/NotFounds/NotFounds";
import PrivateRoute from "./components/LoginFrom/PrivateRoute/PrivateRoute";
import Contacts from "./components/Contacts/Contacts";
import Specialists from "./components/Specialists/Specialists";





function App() {
  return (
    <AuthProvider>
    <div>
       <Router>
      <div>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/">
             <Home /> 
          </Route>
          <Route exct path="/Home">
             <Home /> 
          </Route>
          <PrivateRoute path="/Specialists">
             <Specialists /> 
          </PrivateRoute>
          <PrivateRoute  path="/Details/:DetailsId">
             <Details></Details>
          </PrivateRoute>
          <Route path="/Contacts">
             <Contacts /> 
          </Route>
          <Route path="/Login">
             <Login /> 
          </Route>
          <Route path="/Register">
             <Register /> 
          </Route>
          <Route path="*">
             <NotFounds /> 
          </Route>
          
        </Switch>
        <Footer></Footer> 
      </div>
    </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
