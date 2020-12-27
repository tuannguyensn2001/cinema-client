import React from 'react';
import Navbar from "./Navbar";
import style from '../../../styles/User/Page/home.module.css'
function LayoutUser(props)
{
    return (
        <div style={{
            backgroundColor: '#f8f8f8'
        }}>
                <Navbar/>
            <div className={style.main}>
                {props.children}
            </div>
        </div>
    )
}

export default  LayoutUser;