import {React,useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Pagination,Table} from "antd";
import {getAllFilm} from "../../../../services/FilmService";


function ListFilm(props)
{
    const [size,setSize] = useState(0);
    const [page,setPage] = useState(1);
    const [listFilm,setListFilm] = useState([]);

    useEffect(()=>{
        getAllFilm(page)
            .then(response=>{
                const data = response.data.data;
                setSize(data.size);
                setListFilm(data.film.data)
            })
            .catch(err=>console.log(err));
    },[page]);

    return(
        <div>
            <div>
                <Link to='/admin/film/create'>Them moi film</Link>

                <div>
                    <Table
                    dataSource={listFilm}
                    columns={[
                        {
                            title: 'Tên phim',
                            dataIndex: 'name',
                            key: 'name',
                        },
                        {
                            title: 'Đạo diễn',
                            dataIndex: 'director',
                            key: 'director',
                        },
                        {
                            title: 'Diễn viên',
                            dataIndex: 'actor',
                            key: 'actor',
                        },
                        {
                            title: 'Ngày công chiếu',
                            dataIndex: 'date',
                            key: 'date',
                        },
                    ]}
                    />
                </div>


                <Pagination defaultCurrent={6} total={size}
                            pageSizeOptions={[10]}
                            showLessItems={true}
                            onChange={(value)=>setPage(value)}
                />
            </div>
        </div>
    )



}

export default  ListFilm;