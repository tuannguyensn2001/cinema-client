import {React} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import style from '../../../styles/User/MenuAuth/menuauth.module.css';
import {useHistory} from 'react-router-dom';

function MenuAuth(props) {
    const history = useHistory();

    const redirect = (route) => {
        history.push(route);
    }


    const renderMenu = () => {
        if (props.target === 'login') {
            return (
                <ul>
                    <li className={style.active} onClick={()=>redirect('/login')}>
                        <Link to='/login'>Đăng nhập</Link>
                    </li>
                    <li onClick={()=>redirect('/register')}>
                        <Link to='/register' >Đăng ký</Link>
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