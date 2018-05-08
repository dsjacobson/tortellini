import React from "react"
import "./Footer.css"

const services = require("../../services.json");
const caseStudies = require("../../caseStudies.json");
const contactInfo = require("../../contactInfo.json");
const socialMedia = require("../../socialMedia.json");

const Footer = () => (
    <footer className="marketing-site-footer grid-x medium-12">
        <div className="medium-unstack grid-x medium-12">
            <div className="cell medium-3">
                <h4 className="marketing-site-footer-name">Tortellini</h4>
                <ul className="menu marketing-site-footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services/service1">Services</a></li>
                    <li><a href="/team">Team</a></li>
                    <li><a href="/casestudies">Case Studies</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>
            <div className="cell medium-3">
                <h4>Services</h4>
                <div>
                    <ul className="menu marketing-site-footer-services">
                        {
                            services.map((service)=> (
                                <li><a href="/services/{service.name}">{service.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/*Footer contact info with schema.org markup for SEO*/}
            <div className="cell medium-3">
                <ul className="menu marketing-site-footer-contacts">
        
                    {
                        contactInfo.map((info)=> (
                            <div itemscope itemtype="http://schema.org/LocalBusiness">
                                <h4 itemprop="name">{info.companyName}</h4>
                                <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><span itemprop="streetAddress">{info.street}</span><br/>
                                <span itemprop="addressLocality">{info.city}</span>, <span itemprop="addressRegion">{info.state}</span> <span itemprop="postalCode">{info.zip}</span></span>
                                <br/>Phone: <span itemprop="telephone">{info.phone}</span>
                                <br/>E-mail: <span itemprop="email">{info.email}</span>
                            </div>
                        ))
                    }
                </ul>
            </div>
            <div className="cell medium-3">
                <h4>Follow Us</h4>
                <ul className="menu marketing-site-footer-menu-social simple grid-x medium-12">
                    {
                        socialMedia.map((media)=>(
                            <li className="cell medium-4">
                                <a href={media.url}>
                                    <img src={media.image} alt={media.name} className="social-icons"/>
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