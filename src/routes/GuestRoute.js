import {Route,Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";


function GuestRoute({ children, ...rest }) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                !isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default GuestRoute;