import {React } from 'react';
import {Link} from 'react-router-dom';


function ListFilm(props)
{


    return (
        <div>
           <Link to='/admin/film/create'>Them moi film</Link>
        </div>
    )
}

export default  ListFilm;