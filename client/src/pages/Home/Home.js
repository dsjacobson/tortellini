import React from "react";
import "./Home.css";

const services = require("../../services.json");
const caseStudies = require("../../caseStudies.json");
const blogPosts = require("../../blogPosts.json");

const Home = () => (
    <div className="grid-x">
        {/*hero*/}
        <div className="marketing-site-hero cell small-12 medium-12">
            <div className="marketing-site-hero-content">
                <h1>Welcome to Tortellini</h1>
                <p className="subheader">Marketing/Consulting Firm Template</p>
                <a href="/#" className="round button">learn more</a>
            </div>
        </div>
        {/*services*/}
        <section className="marketing-site-three-up grid-x small-12 medium-12">
                {
                    services.map((service) => (
                        <div className="feature-section cell small-12 medium-4">
                            <i className={service.icon} aria-hidden="true"/><br/>
                            <h4 className="marketing-site-three-up-title"><a href={"/services/" + service.name}>{service.name}</a></h4>
                            <p className="marketing-site-three-up-desc">{service.description}</p>
                            <a href={"/services/" + service.name} className="round button">Learn More</a>
                        </div>
                    ))
                }
        </section>
        {/*Case studies*/}
        <div className="marketing-site-features-case-studies grid-x small-12 medium-12">
            <h2 className="marketing-site-features-headline cell small-12 medium-12">Case Studies</h2>
            {
                caseStudies.map((study) => (
                    <div className="tech-section cell small-12 medium-3">
                        <a href={"/casestudies/" + study.name}><img src={study.image} alt={study.name} aria-hidden="true"/></a>
                        <span><h5>{study.name}</h5></span>
                    </div>
                ))
            }
        </div>
        {/*Recent Blog Posts*/}
        <div className="marketing-site-features grid-x small-12 medium-12">
            <h2 className="marketing-site-features-headline cell small-12 medium-12">Recent Blog Posts</h2>
            {
                blogPosts.map((post) => (
                    <div className="tech-section cell small-12 medium-4">
                        <a href="/blog/{post._id}"><h4>{post.title}</h4><p>{post.text}</p></a>

                        <img src={post.image} alt=""/>
                        <h3 className="marketing-site-three-up-title">{post.name}</h3>
                        <p className="marketing-site-three-up-desc">{post.shortDesc}</p>
                        <button className="round button">Read More</button>
                    </div>
                ))
            }
        </div>

    </div>
);

export default Home;