import {React,useState} from 'react';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import '../../../styles/Admin/Dashboard/dashboard.css';
import classNames from 'classnames';


function LayoutAdmin(props)
{
    const [isSidebarHide,setIsSidebarHide] = useState(true);

    function changeSidebar()
    {
        setIsSidebarHide(!isSidebarHide);
    }

    return(
        <div className="container-fluid ">
            <Sidebar
                isSidebarHide={isSidebarHide}
            />
            <div className={classNames({
                'page_container': true,
                'hide_sidebar_container': !isSidebarHide,
            })}>
                <Header
                    changeSidebar={changeSidebar}
                    isSidebarHide={isSidebarHide}
                />
                <div className="main" style={{
                    minHeight: '700px',
                }}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}



export default LayoutAdmin;