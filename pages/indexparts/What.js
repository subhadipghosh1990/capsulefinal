
import React from "react";
import Image from 'next/image';
import Slider from "react-slick";

const What = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding:"0px",
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return(
        <div id="services" className="our-services section">
    <div className="services-right-dec">
    <Image width={305} height={305} layout="responsive" src="/assets/images/services-right-dec.png" alt=""/>
    </div>
    
    <div className="container">
      {/* <div className="services-left-dec">
        <img src="/assets/images/services-left-dec.png" alt=""/>
      </div> */}
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            {/* <h2>We <em>Provide</em> The Best Service With <span>Our Tools</span></h2> */}
            <h2>IoT is a <span>career</span> <em>path.</em></h2>
            <span>IoT is a technology gateway.</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* <div className="d-flex flex-wrap justify-content-center"> */}
          <div className="serviceSlider">

            <Slider {...settings}>

            <div className="item">
                <h4>IoT Feild Engineering</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/c1.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>IoT Prototyping</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/c2.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>IoT Research</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/c3.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>IoT Product Development</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/c4.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>IoT Solution Architecting</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/c5.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>IoT Product Management</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/c6.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>Mobile App Development</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/g1.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>Enterprise Web Applications</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/g2.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>AI/ML Development</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/g3.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>Cloud Service Integration</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/g4.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>Embedded Engineering</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/g5.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            <div className="item">
                <h4>Blockchain Development</h4>
                <div className="icon"><Image width={45} height={45}src="/assets/images/g6.png" alt=""/></div>
                <div className="main-blue-button-hover">
                    <a href="#">Get Started</a>
                </div>
            </div>

            </Slider>
          </div>

          <div className="text-center pt-5 section-heading">
              <h2><em>Capsule Labs</em> <span>IoT certification</span> is for you.</h2>

              <div className="main-red-button-hover pt-5"><a href="#">Download Brochure</a></div>                

          </div>
        </div>
      </div>
    </div>
  </div>
    )
}


export default What;