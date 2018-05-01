import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import CaseStudies from "./pages/CaseStudies";
import Blogs from "./pages/Blogs";
import "./App.css"
import Blog from "./pages/Blog";

const App = () => (

    <Router>
        <div>
            <Nav />

                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/services/:name" component={Services} />

                    <Route exact path="/team" component={Team} />

                    <Route exact path="/casestudies/:name" component={CaseStudies} />

                    <Route exact path="/blog/:id" component={Blog} />

                    <Route exact path="/blog" component={Blogs} />


            <Footer />
        </div>
    </Router>

);

export default App;
