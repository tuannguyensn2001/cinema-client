import LayoutAdmin from "../../../components/Admin/Layouts";
import {React} from "react";
import {Switch,Route,useRouteMatch} from 'react-router-dom';
import PageDashboard from "../../../components/Admin/PageComponent/PageDashboard";
import ListFilm from "../../../components/Admin/PageComponent/Film/ListFilm";
import CreateFilm from "../../../components/Admin/PageComponent/Film/CreateFilm";

function Dashboard(props)
{
    const {path,url} = useRouteMatch();

    return (
       <LayoutAdmin>
           <Route path={`${path}`} exact component={PageDashboard}/>
           <Route path={`${path}/film`} exact component={ListFilm}/>
           <Route path={`${path}/film/create`} component={CreateFilm} />


       </LayoutAdmin>
    )
}

export default  Dashboard;