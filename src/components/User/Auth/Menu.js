import {React} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import style from '../../../styles/User/MenuAuth/menuauth.module.css';


function MenuAuth(props) {
    const renderMenu = () => {
        if (props.target === 'login') {
            return (
                <ul>
                    <li className={style.active}>
                        <Link to='/login'>Đăng nhập</Link>
                    </li>
                    <li>
                        <Link to='/register'>Đăng ký</Link>
                    </li>
                </ul>
            );
        }

        if (props.target === 'register') {
            return (
                <ul>
                    <li>
                        <Link to='/login'>Đăng nhập</Link>
                    </li>
                    <li className={style.active}>
                        <Link to='/register'>Đăng ký</Link>
                    </li>
                </ul>
            );
        }

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
        <div className={style.menu_auth}>
            {renderMenu()}
        </div>
    )
}

export default MenuAuth;