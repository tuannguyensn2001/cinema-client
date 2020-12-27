import {React,useEffect} from "react";
import '../../../styles/Admin/Header/header.css'
import classNames from 'classnames';

function Header(props) {

    useEffect(function(){
        console.log(props);
    })


    return (

        <div className={classNames({
            'header_wrapper': true,
            'hide_sidebar_header' : !props.isSidebarHide,
        })}>
            <div className="header">
                <div className="nav_right">
                    <ul>
                        <li
                            onClick={props.changeSidebar}
                        ><i className="fas fa-bars"/></li>
                        <li><i className="fas fa-search"/></li>
                    </ul>

                    <ul>
                        <li>
                            <i className="fas fa-bell">
                                <p>2</p>
                            </i>
                        </li>
                        <li>
                            <i className="fas fa-envelope-open">
                                <p>9</p>
                            </i>
                        </li>
                        <li className="nav_right_info">
                            <img
                                src="https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/12688023_1672947546306198_4010743652233172786_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=WQce2RWtQJ4AX92Kk2X&_nc_ht=scontent.fhan5-5.fna&oh=29f7f8bd1c0468f50a92dfc14a3f5f2d&oe=5FFB7F0E"
                                alt=""/>
                            <p>Tuấn</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}


export default Header;