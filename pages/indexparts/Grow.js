import React from "react";
import  Image from 'next/image'

const Grow = () => {
    return(
        <div id="about" className="about-us section">
            <div className="container">
            <div className="row">
                <div className="col-lg-4 align-self-center">
                <div className="left-image">
                    <Image width={606} height={504} layout="responsive" src="/assets/images/about-left-image.png" alt="Two Girls working together"/>
                </div>
                </div>
                <div className="col-lg-8">
                <div className="section-heading">
                    <h2>Benefits of <span>CapsuleLabs</span> <em>Certification</em></h2>
                    {/* <p>You can browse free HTML templates on Too CSS website. Visit the website and explore latest website templates for your projects.</p> */}
                    <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                        <div className="count-area-content">
                            <div className="icon">
                            <Image width={45} height={45} src="/assets/images/service-icon-01.png" alt=""/>
                            </div>
                            <div className="count-digit">01</div>
                            <div className="count-title">Flexibility</div>
                            <p>Develop personal insights into projects or align project with identified skill gap.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                        <div className="count-area-content">
                            <div className="icon">
                            <Image width={45} height={45} src="/assets/images/service-icon-02.png" alt=""/>
                            </div>
                            <div className="count-digit">02</div>
                            <div className="count-title">Scoping</div>
                            <p>Identify knowledge bases and reusable components for achieving project goals.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                        <div className="count-area-content">
                            <div className="icon">
                            <Image width={45} height={45} src="/assets/images/service-icon-03.png" alt=""/>
                            </div>
                            <div className="count-digit">03</div>
                            <div className="count-title">Project-centric</div>
                            <p>Develop personal insights into projects or align project with identified skill gap.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                        <div className="count-area-content">
                            <div className="icon">
                            <Image width={45} height={45} src="/assets/images/service-icon-04.png" alt=""/>
                            </div>
                            <div className="count-digit">03</div>
                            <div className="count-title">Project-centric</div>
                            <p>Develop personal insights into projects or align project with identified skill gap.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default Grow;