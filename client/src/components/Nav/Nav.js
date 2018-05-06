import React from "react";
import "./Nav.css"

const services = require("../../services.json");
const caseStudies = require("../../caseStudies.json");

const Nav = () => (
    <div>
        <nav className="top-bar topbar-responsive">
            <div className="top-bar-title">
                <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
                    <button className="menu-icon" type="button" data-toggle="topbar-responsive"/>
                </span>

                <a className="topbar-responsive-logo" href="/"><strong>Tortellini</strong></a>
            </div>

            <div id="topbar-responsive" className="topbar-responsive-links">
                <div className="top-bar-right">
                    <ul className="menu simple vertical medium-horizontal">
                        <li>
                            <ul className="dropdown menu" data-dropdown-menu>
                                <li>
                                    <a href="/services">Services</a>
                                    <ul className="menu">
                                        {
                                            services.map((service)=>(
                                                <li><a href={"/services/" + service.name}>{service.name}</a></li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/team">Team</a></li>

                    <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
);

export default Nav;