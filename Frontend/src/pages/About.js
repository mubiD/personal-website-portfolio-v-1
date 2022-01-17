// imported features, libraries and extensions
import React from 'react';
import { Link } from 'react-router-dom';

// imported styles
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// imported conponents
import MyNavbar from'./Navbar.js';

function About(){
    return(
        
        <div>
            <MyNavbar />
            <div className="MainAboutDiv">
                <h1 className="MainAboutHeading">About</h1>
                <p className="MainAboutP">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Est, dolore inventore recusandae explicabo possimus amet dolorem provident magnam doloribus 
                nihil commodi. Enim delectus consectetur repellendus, repudiandae quam praesentium magni iusto 
                dignissimos reiciendis aliquid. Est enim facere expedita aliquam suscipit ex ullam id nobis quia 
                facilis necessitatibus, ad obcaecati alias magnam eos consectetur. Enim esse cumque in quam fuga 
                quibusdam possimus nam illo saepe ad sit voluptas, accusamus repudiandae id consequatur iste
                accusantium optio iure cupiditate exercitationem recusandae quia. Quam dolorum deleniti impedit 
                voluptates officia iusto veritatis, deserunt accusamus vitae tempore recusandae. Impedit possimus 
                porro qui minima soluta molestiae voluptates quibusdam.
                </p>

                {/* this div below needs some work */}
                <div>
                    <span className="MainAboutP" >A formal and detailed resume can be made available upon request. 
                    For now, please view some of my projects </span>
                    <br></br>
                    <span><Link to="/projects" className="WhiteLink">View Projects</Link></span>
                </div>
                
            </div>
        </div>
    )
};

export default About;