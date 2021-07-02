import Link from 'next/link'
import Image from 'next/image'
import React from "react";

const Gapcrud = () => {
    return(
        <React.Fragment>

<div id="portfolio" className="our-portfolio section">
    <div className="portfolio-left-dec">
      <div>
      {/* <Image width={300} height={413}  src="/assets/images/portfolio-left-dec.png" alt=""/> */}
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>Capturing project <em>provenence</em> using <span>GAPCRUD</span> methodology</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">

          <div className="d-flex flex-wrap justify-content-center">

            <div className="item">
              <div className="thumb">
                <span className="alphabet">G</span>
              <div>
                <Image width={300} height={413}  src="/assets/images/portfolio-01.jpg" alt=""/>
                </div>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a  href="#" target="_parent"><h4>Goal Creation</h4></a>
                    {/* <span>Plot Listing</span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="thumb">
              <span className="alphabet">A</span>
              <div>
                <Image width={300} height={413}  src="/assets/images/portfolio-02.jpg" alt=""/>
                </div>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>Architecture Selection</h4></a>
                    {/* <span>SEO &amp; Marketing</span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="thumb">
              <span className="alphabet">P</span>
              <div>
                <Image width={300} height={413}  src="/assets/images/portfolio-03.jpg" alt=""/>
                </div>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a  href="#" target="_parent"><h4>Project Planning</h4></a>
                    {/* <span>Space Dynamic SEO</span> */}
                  </div>
                </div>
              </div>
            </div>
            
            </div>


            <div className="d-flex flex-wrap justify-content-center">
            <div className="item">
              <div className="thumb">
              <span className="alphabet">C</span>
              <div>
                <Image width={300} height={413}  src="/assets/images/portfolio-04.jpg" alt=""/>
                </div>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>Coding Milestones</h4></a>
                    {/* <span>Website Marketing</span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="thumb">
              <span className="alphabet">R</span>
              <div>
                <Image width={300} height={413}  src="/assets/images/portfolio-01.jpg" alt=""/>
                </div>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>Test Report</h4></a>
                    {/* <span>Digital Assets</span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="thumb">
              <span className="alphabet">U</span>
              <div>
                <Image width={300} height={413}  src="/assets/images/portfolio-02.jpg" alt=""/>
                </div>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>User Manual</h4></a>
                    {/* <span>SEO &amp; Marketing</span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="thumb">
              <span className="alphabet">D</span>
              <div>
                <Image width={300} height={413}  src="/assets/images/portfolio-03.jpg" alt=""/>
                </div>
                <div className="hover-effect">
                  <div className="inner-content">
                    <a href="#"><h4>Demo Day</h4></a>
                    {/* <span>SEO &amp; Marketing</span> */}
                  </div>
                </div>
              </div>
            </div>

            </div>
          
        </div>

        <div className="col-12 py-0 text-center">
            <div className="main-blue-button-hover pt-4"><a href="#">Certifications</a></div>
        </div>
      </div>
    </div>
  </div>

        </React.Fragment>
    )
}


export default Gapcrud;