import {React} from 'react';
import style from '../../../styles/User/Navbar/navbarchild.module.css';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";


function NavbarChild(props)
{
    const {isLoggedIn, user} = useSelector(state => state.auth);

    console.log(isLoggedIn,user);

    const renderLi = () => {
        if (!isLoggedIn){
            return (
                <ul>
                    <li>
                        <Link to='/login'>Đăng nhập</Link>
                    </li>
                    <li>
                        <Link to='/register'>Đăng ký</Link>
                    </li>
                </ul>
            )
        }

        return (
            <ul>
                <li>
                    <p >Xin chào</p>
                </li>
                <li>
                    <p>Đăng xuất</p>
                </li>
            </ul>
        )
    }

    return (
        <div className={style.navbar_child}>
            <div className="container">
                {renderLi()}
            </div>
        </div>
    )
}

export default NavbarChild;