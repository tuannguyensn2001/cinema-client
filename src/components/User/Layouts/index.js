import React from 'react';
import Navbar from "./Navbar";
function LayoutUser(props)
{
    return (
        <div style={{
            backgroundColor: '#f8f8f8'
        }}>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default  LayoutUser;