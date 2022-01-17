// imported features, libraries and extensions
import React from 'react';
import { Outlet } from 'react-router-dom';
import {Helmet} from 'react-helmet';


// imported styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// imported conponents
import MyNavbar from'./pages/Navbar.js';
import Home from './pages/Home.js';

  function App(){
    return (
      
      <div className="App">
        {/* Helmet allows us to edit app title and web address */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mubashir's Personal App</title>
          {/* once hosted, insert hosted web address below */}
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <MyNavbar />
        <Home />
        <Outlet /> 
       
{/*          
        <About />
        <Projects name="JavaScript" FEframework="React" BEframework="Express" />
        <Contact />  */}

      </div>

    )
  }
// };

export default App;
