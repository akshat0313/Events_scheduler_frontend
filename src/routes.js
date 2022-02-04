import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./views/Home/home";
import Events from "./views/Events/events";
import Clubs from "./views/Clubs/clubs";
import Others from "./views/Others/others";
import Layout from "./layout/Layout";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
            //Layout and sidebar can now receive props
                <Layout {...props}>
                    <div>
                    <Route path="/home" exact component={Home}/>
                <Route path="/events" component={Events}/>
                <Route path="/clubs" component={Clubs}/>
                <Route path="/others" component={Others}/>
                    </div>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;

