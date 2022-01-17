// imported features, libraries and extensions
import React from 'react';

// imported styles
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// imported conponents
import MyNavbar from'./Navbar.js';

const ProjectIntro = () => {
    return(
        <div className="ProjectIntroDiv">
            <h1 className="ProjectIntroHeading">My Projects</h1>
            <p className="ProjectIntroP">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolor aliquam nisi in, 
                voluptatum nesciunt, dolorum autem dolorem nihil molestias deserunt ratione expedita qui maiores.
            </p>
        </div>
    )
};

const ProjectCard = (props) => {
    return(
        <div>
            <div className="card bg-light rounded m-5">
                    <div className="ProjectInfoDiv">
                        <h2 className="MainProjectTitle">Project Title: {props.projectT}</h2>
                        <h4 className="MainProjectDescription">Project Overview: {props.overview}</h4>
                        <p className="MainProjectsP">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellendus doloremque nemo eos debitis atque assumenda impedit quos labore deleniti. 
                            Corporis.s
                        </p>
                        <div className="TechStackDiv">
                            <span className="TechStackSpan">Tech Stack used:</span>
                            {/* <ul className="TechStackUL"> */}
                                <li className="TechStackLi">{props.name}</li>
                                <li className="TechStackLi">{props.FEframework}</li>
                                <li className="TechStackLi">{props.BEframework}</li>
                                <li className="TechStackLi">{props.Container}</li>
                                <li className="TechStackLi">{props.DB}</li>
                            {/* </ul> */}
                        </div>
                        <a href="http://" className="ProjectLink">Link to live project</a>
                        <br></br>
                        <a href="http://" className="ProjectLink">Link to GitHub repo</a>
                      
                    </div>
                </div>
        </div>
    )
};


function Projects(props){
    return(
        <div className="MainProjectDiv">
            <MyNavbar />
            <div >
                <ProjectIntro/>
                
                <ProjectCard 
                    projectT="Game App"
                    overview="bla bla bla bla bla bla bla bla bla bla bla " 
                    name="js"
                    FEframework="React"
                    BEframework="Express"
                    Container="NodeJS"
                    DB="mongoDB"
                /> 
                <ProjectCard 
                    projectT="Game App"
                    overview="bla bla bla bla bla bla bla bla bla bla bla " 
                    name="js"
                    FEframework="React"
                    BEframework="Express"
                    Container="NodeJS"
                    DB="mongoDB"
                />
                <ProjectCard 
                    projectT="Game App"
                    overview="bla bla bla bla bla bla bla bla bla bla bla " 
                    name="js"
                    FEframework="React"
                    BEframework="Express"
                    Container="NodeJS"
                    DB="mongoDB"
                />
                <ProjectCard 
                    projectT="Game App"
                    overview="bla bla bla bla bla bla bla bla bla bla bla " 
                    name="js"
                    FEframework="React"
                    BEframework="Express"
                    Container="NodeJS"
                    DB="mongoDB"
                />
            </div>
        </div>
    )
};

export default Projects;