import {React,useRef,useEffect} from "react";
import '../../../styles/Admin/Sidebar/sidebar.css'
import classNames from 'classnames';


function Sidebar(props)
{


    return (
        <div className={classNames({
            'sidebar': true,
            'hide' : !props.isSidebarHide,
        })}>
            <div className="sidebar_inner">
                <div className="sidebar_logo">
                    ảnh nha
                </div>

                <div
                    className="sidebar_menu"
                >
                    <ul>
                        <li>
                            <i className="fas fa-grip-horizontal fa-1x" />
                            <a>Dashboard</a>
                        </li>
                        <li>
                            <i className="fas fa-envelope"/>
                            <a>Email</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default Sidebar;