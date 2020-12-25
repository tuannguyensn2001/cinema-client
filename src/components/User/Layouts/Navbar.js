import React from 'react';
import {Link} from 'react-router-dom';
import style from '../../../styles/User/Navbar/navbar.module.css';

function Navbar(props)
{
    return (
        <div>
            <nav className={style.navbar}>
                <div>
                    <p>Logo</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Trang chu</Link>
                        </li>
                        <li>
                            <Link to='/login'>Dang nhap</Link>
                        </li>
                        <li>
                            <Link to='/register'>Dang ky</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;