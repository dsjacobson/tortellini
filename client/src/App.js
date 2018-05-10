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
import CreateBlogPosts from "./pages/CreateBlogPosts";
import Detail from "./pages/Detail";

const App = () => (

    <Router>
        <div>
            <Nav />

                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/services/:name" component={Services} />

                    <Route exact path="/team" component={Team} />

                    <Route exact path="/casestudies/:name" component={CaseStudies} />

                    <Route exact path="/blogs/:id" component={Detail} />

                    <Route exact path="/blog" component={Blog} />

                </Switch>

            <Footer />
        </div>
    </Router>

);

export default App;
