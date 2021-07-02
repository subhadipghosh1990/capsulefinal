import Head from 'next/head';
import React from "react";

const Banner = () => {
    return(
        <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="">
                    <div className="item header-text">
                      <h6><span>Welcome to</span> Capsule Labs</h6>
                      <h2>Build a <em> career</em> in the world on <span>IOT</span>?</h2>
                      <p>This is a professional looking HTML Bootstrap 5 website template brought to you by TemplateMo website.</p>
                      <div className="down-buttons">
                        <div className="main-blue-button-hover">
                          <a href="#contact">Message Us Now</a>
                        </div>
                        <div className="call-button">
                          <a href="#"><i className="fa fa-phone"></i> 010-020-0340</a>
                        </div>
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


export default Banner;