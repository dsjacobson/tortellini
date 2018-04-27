import React from "react";
import "./Services.css";

const services = require("../../services.json");

const Services = () => (
    <div className="services grid-x medium-12">
        <h3>Services</h3>
        <p>description</p>
        {
            services.map((service)=>(

            ))
        }
    </div>
);

export default Services;