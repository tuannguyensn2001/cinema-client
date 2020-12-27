import {React, useState} from 'react';
import style from '../../../styles/User/Film/film.module.css';
import {Link} from 'react-router-dom';
import {PlayCircleOutlined} from '@ant-design/icons';
import {Modal} from 'antd';

function Film() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className={style.film}>
            <div className={style.filmThumbnail}>
                <img
                    src="https://files.betacorp.vn/files/media%2fimages%2f2020%2f11%2f23%2funtitled%2D1%2D155854%2D231120%2D29.jpg"
                    alt=""/>
                <div>
                    <div>
                        <PlayCircleOutlined onClick={showModal}
                                            style={{fontSize: '70px', color: '#ffffff', fontWeight: 'bold'}}/>
                    </div>
                </div>

            </div>
            <div className={style.filmContent}>
                <div className={style.filmTitle}>
                    <Link to='/s'><h3>Chị Mười Ba: 3 ngày sinh tử </h3></Link>
                </div>
                <div className={style.filmDescription}>
                    <div className='d-flex'>
                        <h6>Thể loại : </h6>
                        <span style={{
                            marginLeft: 4,
                        }}
                        >
                            Hài hước, hài kịch
                        </span>

                    </div>
                    <div className='d-flex'>
                        <h6>Thời lượng : </h6>
                        <span style={{
                            marginLeft: 4,
                        }}
                        >
                            97 phút
                        </span>
                    </div>
                    <div>
                        <button>MUA VÉ</button>
                    </div>
                </div>
            </div>

            <Modal title="TRAILER" visible={isModalVisible}

                   onOk={handleOk}
                   onCancel={handleCancel}
                   okButtonProps={{display: false}}
                   cancelButtonProps={{display: false}}
                   style={{
                       zIndex: '9999999999999999'
                   }}
                   height='auto'
                   width={1000}
            >
                <iframe
                    style={{

                    }}
                    width="100%" height="500px" src="https://www.youtube.com/embed/ZVRgd6YQoRU" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </Modal>
        </div>
    )
}

export default Film;