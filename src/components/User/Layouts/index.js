import React from 'react';
import Navbar from "./Navbar";
function LayoutUser(props)
{
    return (
        <div style={{
            backgroundColor: '#f8f8f8'
        }}>
                <Navbar/>
            <div style={{
                marginTop: '100px',
                minHeight: '700px',
            }}>
                {props.children}
            </div>
        </div>
    )
}

export default  LayoutUser;