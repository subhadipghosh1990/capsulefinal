import Link from 'next/link'
import Image from 'next/image'
import React from "react";

const Footer = () => {
    return(
        <React.Fragment>
            <div className="footer-dec">
                <Image width={3800} height={500} layout="responsive" src="/assets/images/footer-dec.png" alt=""/>
            </div>
            

            <footer>

                <div className="container">

                    <div className="row">

                        <div className="col-lg-3">
                            <div className="about footer-item">
                                <div className="logo">
                                    <div>
                                        <a><Image width={290} height={90} layout="responsive" src="/assets/images/logow.png" alt="Onix Digital TemplateMo"/></a>
                                    </div>
                                </div>
                                <Link href="#"><a>info@company.com</a></Link>
                                <ul>
                                    <li><Link href="#"><a><i className="fa fa-facebook"></i></a></Link></li>
                                    <li><Link href="#"><a><i className="fa fa-twitter"></i></a></Link></li>
                                    <li><Link href="#"><a><i className="fa fa-behance"></i></a></Link></li>
                                    <li><Link href="#"><a><i className="fa fa-instagram"></i></a></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="services footer-item">
                                <h4>About Us</h4>
                                <ul>                                 
                                    <li><Link href="#"><a>Company</a></Link></li>
                                    <li><Link href="#"><a>Career</a></Link></li>
                                    <li><Link href="#"><a>News</a></Link></li>
                                    <li><Link href="#"><a>Contact</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="community footer-item">
                                <h4>Related</h4>
                                <ul>
                                    <li><Link href="#"><a>Discalimer</a></Link></li>
                                    <li><Link href="#"><a>Privacy Policy</a></Link></li>
                                    <li><Link href="#"><a>Terms of Service</a></Link></li>
                                    <li><Link href="#"><a>Support</a></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="subscribe-newsletters footer-item">
                                <h4>Subscribe Newsletters</h4>
                                <p>Get our latest news and ideas to your inbox</p>
                                <form action="#" method="get">
                                <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""/>
                                <button type="submit" id="form-submit" className="main-button "><i className="fa fa-paper-plane-o"></i></button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-12">
                        <div className="copyright">
                            <p>Copyright © 2021 capsuleLabs.in. All Rights Reserved.</p>
                        </div>
                        </div>

                    </div>

                </div>

            </footer>


        </React.Fragment>
    )
}


export default Footer;