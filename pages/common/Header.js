import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from "react";

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const toggleMenu =(event) =>{
        event.preventDefault();
        if(toggle){
            setToggle(false);
            console.log(toggle);
        }
        else{
            setToggle(true);
            console.log(toggle);
        }
    }


    return(
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        
                            <Link href="/">
                            <div className="logo text-left">
                                <a><Image height={45} width={120} src="/assets/images/logo.png" alt="head logo" className=""/></a>
                            </div>
                            </Link>
                    </div>
                    <div className="col-md-8">
                            <nav className={toggle ? "show main-nav" : "main-nav"}>
                            <ul className="nav d-md-flex flex-wrap justify-content-end">
                                <li><Link href="#"><a>Vision</a></Link></li>
                                <li><Link href="/#about"><a>IOT Careers</a></Link></li>
                                <li><Link href="#"><a>Certification</a></Link></li>
                                <li><div className="main-red-button-hover"><Link href="#contact"><a>Services</a></Link></div></li>
                            </ul>        
                            <Link href="#">
                                <a onClick={(event)=> toggleMenu(event)} className={toggle ? 'active menu-trigger' : 'menu-trigger'}><span>Menu</span></a>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;