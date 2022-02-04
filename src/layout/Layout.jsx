import React, { useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import {  useLocation } from 'react-router-dom';
import EventDetails from '../views/Events/Details/EventDetails';

const Layout = props => {
    const { children } = props;
    const location = useLocation();
    const [path, setPath] = useState(location.pathname );
    console.log(location.pathname);
    if(path === "/eventDetails"){
      return(
        <EventDetails />
      )
    }
    return (
      <div >
        <header ></header>
        <aside >
          
        </aside>
        <main className='flex flex-row'>
          {
            
          }
        <Sidebar />

          <div>{children}
          </div></main>
        <footer ></footer>
      </div>
    );
  };
  
  export default Layout;