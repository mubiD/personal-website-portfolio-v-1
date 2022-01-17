// imported features, libraries and extensions
import React from 'react';
import { Link } from 'react-router-dom';


// imported styles
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// imported conponents

function Home(){
    return(
        <div className="Home">
            {/* <div className="color"></div> */}
            <h1 className="MainHeading">I am <br></br>
                <span className="myName">Mubashir Dollie</span>
            </h1>
            {/* <div className="innerBlob"></div> */}
            <p className="MainP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maxime optio error necessitatibus 
                fugit excepturi provident dolores praesentium ullam facilis culpa unde, animi illo quam architecto 
                cumque. Optio, blanditiis ipsum...</p>
                <span className="ReadMore">
                    <Link to="/about" className="Link">read more</Link>
                </span>
            {/* <div className="blob"></div> */}
            {/* <div className="blob2"></div> */}
            
            
        </div>
    )
};

export default Home;