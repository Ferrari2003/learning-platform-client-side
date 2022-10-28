import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return    <Spinner animation="border" variant="danger" />
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;