import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './layout/Layout.jsx';
import Home from './views/Home/home';
import Clubs from './views/Clubs/clubs';
import Events from './views/Events/events';
import Others from './views/Others/others';
import Alcher from "./views/Events/Alcher/Alcher";
import Robotics from "./views/Events/Robotics/Robotics";
import Swc from "./views/Events/Swc/Swc";
import EventDetails from "./views/Events/Details/EventDetails.jsx";

function App() {
  return (
    <div>
      
      <Router>
        <div className="App">
          <Layout>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/events' exact element={<Events />} >
                <Route path='/events/Alcher' exact element={<Alcher />} />
                <Route path='/events/Robotics' exact element={<Robotics />} />
                <Route path='/events/Swc' exact element={<Swc />} />
              </Route>
              <Route path='/clubs' exact element={<Clubs />} />
              <Route path='/others' exact element={<Others />} />
              <Route path='/eventDetails' exact element={<EventDetails />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </div>
  );
}

export default App;
