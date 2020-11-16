import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;