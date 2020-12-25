import React from 'react';
import LayoutUser from "../../../components/User/Layouts";
import {Link} from 'react-router-dom';
import Login from "../../../components/User/Auth/Login";
import MenuAuth from "../../../components/User/Auth/Menu";

const contentStyle={
    margin: 'auto',
    width: '50%',
}

const componentStyle = {
    marginTop: '50px',
}

function LoginPage(props)
{


    return (
        <LayoutUser>


           <div className="container">
               <div style={contentStyle}>
                  <div style={componentStyle}>
                      <MenuAuth
                          target='login'
                      />
                  </div>
                  <div style={componentStyle}>
                      <Login/>
                  </div>
               </div>

           </div>
        </LayoutUser>
    )
}

export default LoginPage;