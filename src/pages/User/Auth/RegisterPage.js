import React from 'react';
import LayoutUser from "../../../components/User/Layouts";
import {Link} from 'react-router-dom';
import Login from "../../../components/User/Auth/Login";
import MenuAuth from "../../../components/User/Auth/Menu";
import Register from "../../../components/User/Auth/Register";
import style from '../../../styles/User/RegisterPage/registerpage.module.css';



const componentStyle = {
    marginTop: '50px',
}

function RegisterPage(props) {


    return (
        <LayoutUser>


            <div className="container">
                <div className={style.content}>
                    <div style={componentStyle}>
                        <MenuAuth
                            target='register'
                        />
                    </div>
                    <div >
                        <Register/>
                    </div>
                </div>

            </div>
        </LayoutUser>
    )
}

export default RegisterPage;