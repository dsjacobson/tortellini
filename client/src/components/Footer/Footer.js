import React from "react"
import "./Footer.css"

const services = require("../../services.json");
const caseStudies = require("../../caseStudies.json");
const contactInfo = require("../../contactInfo.json");
const socialMedia = require("../../socialMedia.json");

const Footer = () => (
    <footer className="marketing-site-footer grid-x medium-12">
        <div className="medium-unstack grid-x medium-12">
            <div className="cell medium-12">
                <a href="#">Back to Top</a>
            </div>
            <div className="cell medium-2">
                <h4 className="marketing-site-footer-name">Tortellini</h4>
                <ul className="menu marketing-site-footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/team">Team</a></li>
                    <li><a href="/casestudies">Case Studies</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>
            <div className="cell medium-3">
                <a href="/services">Services</a>
                <ul className="menu marketing-site-footer-services">
                    {
                        services.map((service)=>{
                            <li><a href="/services/{service.name}">{service.name}</a></li>
                        })
                    }
                </ul>
            </div>
            <div className="cell medium-3">
                <a href="/casestudies">Case Studies</a>
                <ul className="menu marketing-site-footer-case-studies">
                    {
                        caseStudies.map((study)=>(
                            <li><a href="/casestudies/{study.name}">{study.name}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className="cell medium-2">
                Contact Info
                <ul className="menu marketing-site-footer-contacts">
                    {
                        contactInfo.map((info)=> (
                            <p>{info.name}: {info.value}</p>
                        ))
                    }
                </ul>
            </div>
            <div className="cell medium-2">
                <ul className="menu marketing-site-footer-menu-social simple grid-x medium-12">
                    {
                        socialMedia.map((media)=>(
                            <li className="cell medium-6">
                                <a href={media.url}>
                                    <img src={media.image} alt={media.name}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className="marketing-site-footer-bottom grid-x medium-12">
            <div className="large-unstack align-middle grid-x medium-12">
                <div className="cell medium-6">
                    <p>&copy; 2018 Tortellini</p>
                </div>

            </div>
        </div>
    </footer>
);

export default Footer;