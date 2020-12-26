import React from 'react';
import LayoutUser from "../../../components/User/Layouts";
import Carousel from "../../../components/User/Common/Carousel";
import ListFilm from "../../../components/User/Film/ListFilm";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Home(props)
{
    return (
        <div>
            <LayoutUser>
                <div>
                    <Carousel/>
                </div>

                <div className="container">
                    <div>
                        <ListFilm/>
                    </div>
                </div>
            </LayoutUser>
        </div>
    )
}

export default Home;