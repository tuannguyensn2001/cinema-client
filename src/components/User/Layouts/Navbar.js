import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import style from '../../../styles/User/Navbar/navbar.module.css';
import NavbarChild from "./NavbarChild";

function Navbar(props)
{
    useEffect(function(){
        window.addEventListener('scroll',function(){
            console.log('scroll');
        },[]);
    })

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            height: '100px',
            width: '100%',
            zIndex: 99999,
        }}>
            <NavbarChild/>
            <nav className={style.navbar}>
                <div className="container">
                    <div>
                        <p>Logo</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to='/'>LỊCH CHIẾU THEO RẠP</Link>
                            </li>
                            <li>
                                <Link to='/login'>PHIM</Link>
                            </li>
                            <li>
                                <Link to='/register'>RẠP</Link>
                            </li>
                            <li>
                                <Link to='/register'>GIÁ VÉ</Link>
                            </li>
                            <li>
                                <Link to='/register'>TIN MỚI VÀ ƯU ĐÃI</Link>
                            </li>
                            <li>
                                <Link to='/register'>NHƯỢNG QUYỀN</Link>
                            </li>
                            <li>
                                <Link to='/register'>THÀNH VIÊN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;