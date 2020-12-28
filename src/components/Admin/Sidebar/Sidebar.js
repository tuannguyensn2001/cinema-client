import {React,useRef,useEffect} from "react";
import '../../../styles/Admin/Sidebar/sidebar.css'
import classNames from 'classnames';
import {useRouteMatch,Link} from 'react-router-dom';

const listSidebar = [
    {
        key:1,
        name: 'Trang chủ',
        icon: 'fas fa-grip-horizontal fa-1x',
        link: '',
    },
    {
        key: 2,
        name: 'Quản lý phim',
        icon: 'fas fa-envelope',
        link: '/film',
    },
]


function Sidebar(props)
{
    const {path,url} = useRouteMatch();

    const sidebar = listSidebar.map(item=>{
        return (
            <li key={item.key}>
                <i className={item.icon} />
                <Link to={`${url}${item.link}`}>{item.name}</Link>
            </li>
        )
    })



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
                        {sidebar}
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default Sidebar;