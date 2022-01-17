// imported features, resources, libraries and extensions
import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

// imported styles
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// imported conponents
import MyNavbar from'./Navbar.js';
import Email from './Email.js';


function Contact(){
    return(
        <div>
            <MyNavbar />
            <div className="MainContactDiv">
            <h1 className="MainContactHeading">Contact</h1>
            <p className="MainContactP">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis molestias ex 
                consequuntur, doloremque aspernatur, autem iure eos fugiat dolore asperiores corporis 
                laudantium cum deleniti perferendis natus. Veritatis, quo! Hic, cum?
            </p>
            
            <div className="d-inline-flex justify-content-around">
                <div>
                    <h3 className="LiveContactLink">
                        <span>
                            <SocialMediaIconsReact 
                                className="contactIcon"
                                borderColor="rgba(0,0,0,0)" 
                                icon="github" 
                                iconColor="rgba(255,255,255,1)" 
                                backgroundColor="#050505" 
                                url="https://some-website.com/my-social-media-url" 
                                size="26" />
                        </span>
                        
                    </h3>
                </div>
                <div>
                    <h3 className="LiveContactLink">
                        <span>
                            <SocialMediaIconsReact 
                                className="contactIcon"
                                borderColor="rgba(0,0,0,0)" 
                                icon="linkedin" 
                                iconColor="rgba(255,255,255,1)" 
                                backgroundColor="#050505" 
                                url="https://some-website.com/my-social-media-url" 
                                size="26" /></span>
                        
                    </h3>
                </div>
            </div>
            <div className="my-5 card bg-light variant-dark rounded-3">
                <h1>Let's talk!</h1>
                <Email />
            </div>
        </div>
    </div>
    )
};

export default Contact;