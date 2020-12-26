import {useState} from 'react';
import style from '../../../styles/User/Film/listfilm.module.css'


const tabs = ['PHIM SẮP CHIẾU', 'PHIM ĐANG CHIẾU', 'SUẤT CHIẾU ĐẶC BIỆT'];

function ListFilm(props)
{
    const [pickedTab,setPickedTab] = useState(0);


    const handleClickTab = (index) => {
        console.log(index);
        setPickedTab(index);

    }


    const renderTabs = tabs.map((item,index)=>{
        if (index === pickedTab){
            return (
                <li key={index} className={style.active} onClick={event=>{handleClickTab(index)}}>
                    <h4>{item}</h4>
                </li>
            )
        }
        return (
            <li key={index} onClick={event=>{handleClickTab(index)}}>
                <h4>{item}</h4>
            </li>
        )
})




    return (
        <div className={style.mainFilm}>
          <div>
              <ul>
                  {renderTabs}

              </ul>
          </div>
        </div>
    )
}

export default ListFilm;