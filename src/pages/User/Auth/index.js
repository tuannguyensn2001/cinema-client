import React from 'react';
import LayoutUser from "../../../components/User/Layouts";
import {Link, useRouteMatch,Switch,Route} from 'react-router-dom';
import Login from "../../../components/User/Auth/Login";
import GuestRoute from "../../../routes/GuestRoute";

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
                       <GuestRoute path={path} exact>
                           <Login/>
                       </GuestRoute>

                       <GuestRoute path={`${path}/register`}>
                           <h1>Day la dang ky</h1>
                       </GuestRoute>
                   </Switch>
               </div>

           </div>
        </LayoutUser>
    )
}

export default Auth;