import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound(props) {
    return(
        <div className="Main404Div">
            <h1 className="Main404Heading">Hmm, looks like you're lost</h1>
            <p className="Main404P">Click below to find your way back!</p>
            <span>
                <Link to="/" className="PortalLink">Portal to home page</Link>
            </span>
        </div>
    )
};

export default NotFound;