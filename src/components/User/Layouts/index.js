import React from 'react';
import Navbar from "./Navbar";
function LayoutUser(props)
{
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default  LayoutUser;