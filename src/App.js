import {React,useEffect} from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./pages/User/Home";
import Auth from "./pages/User/Auth";
import {useDispatch} from "react-redux";
import {initUser} from "./actions/auth";
import jwt from 'jsonwebtoken';
import {jwt_secret} from "./enum/contants";
import GuestRoute from "./routes/GuestRoute";

function App() {
    const dispatch = useDispatch();

    useEffect(function(){
        const token = localStorage.getItem('user_token');

        if (token) {
            jwt.verify(token,jwt_secret,(err,decoded) => {
                if (err){
                    localStorage.removeItem('user_token');
                } else {
                    dispatch(initUser());
                }

            })
        }


    },[dispatch]);




  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/login' component={Auth}/>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
