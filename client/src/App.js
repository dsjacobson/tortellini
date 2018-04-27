import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Services from "./pages/Services";
import Service from "./pages/Service";
import Team from "./pages/Team";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import Blog from "./pages/Blog";
import "./App.css"

const App = () => (

    <Router>
        <div>
            <Nav />

                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/services" component={Services} />

                    <Route exact path="/services/:name" component={Service} />

                    <Route exact path="/team" component={Team} />

                    <Route exact path="/casestudies/" component={CaseStudies} />

                    <Route exact path="/casestudies/:name" component={CaseStudy} />

                    <Route exact path="/blog/:id" component={Blog} />
                </Switch>

            <Footer />
        </div>
    </Router>

);

export default App;
