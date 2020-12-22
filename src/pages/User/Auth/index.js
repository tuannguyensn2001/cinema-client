import React from 'react';
import LayoutUser from "../../../components/User/Layouts";
import {Link, useRouteMatch,Switch,Route} from 'react-router-dom';
import Login from "../../../components/User/Auth/Login";

const contentStyle={
    margin: 'auto',
    width: '50%',
}

function Auth(props)
{
    const {path, url} = useRouteMatch();

    return (
        <LayoutUser>
            <ul>
                <li>
                    <Link to={`${url}`} >Dang nhap</Link>
                </li>
                <li>
                    <Link to={`${url}/register`}>Dang ky</Link>
                </li>
            </ul>

           <div className="container">
               <div style={contentStyle}>
                   <Switch>
                       <Route path={path} exact>
                           <Login/>
                       </Route>

                       <Route path={`${path}/register`}>
                           <h1>Day la dang ky</h1>
                       </Route>
                   </Switch>
               </div>

           </div>
        </LayoutUser>
    )
}

export default Auth;