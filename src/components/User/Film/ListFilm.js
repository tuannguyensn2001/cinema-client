import {useState} from 'react';
import style from '../../../styles/User/Film/listfilm.module.css'
import Film from "./Film";


const tabs = ['PHIM SẮP CHIẾU', 'PHIM ĐANG CHIẾU', 'SUẤT CHIẾU ĐẶC BIỆT'];

function ListFilm(props) {
    const [pickedTab, setPickedTab] = useState(0);


    const handleClickTab = (index) => {
        console.log(index);
        setPickedTab(index);

    }


    const renderTabs = tabs.map((item, index) => {
        if (index === pickedTab) {
            return (
                <li key={index} className={style.active} onClick={event => {
                    handleClickTab(index)
                }}>
                    <h4>{item}</h4>
                </li>
            )
        }
        return (
            <li key={index} onClick={event => {
                handleClickTab(index)
            }}>
                <h4>{item}</h4>
            </li>
        )
    })

    const renderFilm = [1,2,3,4,5].map((item,index)=>{
        return (
            <div key={index} className='col-xl-3 col-lg-3 col-md-6'>
                <Film/>
            </div>
        )
    });




    return (
        <div className={style.mainFilm}>
            <div>
                <ul>
                    {renderTabs}

                </ul>
            </div>
            <div>
                <div className='row'>
                    {renderFilm}
                </div>
            </div>
        </div>
    )
}

export default ListFilm;