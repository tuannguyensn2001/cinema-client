import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./pages/User/Home";
import Auth from "./pages/User/Auth";

function App() {
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
