import React, {useState} from "react";
import Image from 'next/image'
const Services = () => {

    const [act, setAct] = useState(0);

    const showAct = (e) => {
        setAct(e);
    }

    return(
        <div id="video" className="our-videos section">
            
            <div className="container">

                <div className="row">

                    <div className="section-heading pb-5">
                        <h2>
                            Capsule Labs <span>Services</span>
                        </h2>
                        <p>You can browse free HTML templates on Too CSS website. Visit the website and explore latest website templates for your projects.</p>
                    </div>

                </div>

            </div>


            <div className="videos-left-dec">
                <div>
                    <Image width={220} height={471} layout="responsive" src="/assets/images/videos-left-dec.png" alt=""/>
                </div>
            </div>
            <div className="videos-right-dec">
                <div>
                    <Image width={523} height={720} layout="responsive" src="/assets/images/videos-right-dec.png" alt=""/>
                </div>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="naccs">
                    <div className="grid">
                    <div className="row">
                        <div className="col-lg-8 mb-5">

                            <div className="courseWrapper">

                                <div className={act === 0 ? "d-show" : "d-none"}>

                                    <div className="section-heading pb-3">
                                        <h2>Foundational  <span>Certifictions</span></h2>
                                    </div>

                                    <p>Capsule Labs’ innovative provenance aware certification services are geared towards advanced engineering students, engineering graduates in their gap year and early career professionals seeking rewarding careers in the development and deployment of IoT enabled solutions for their specialized industry verticals. The certifications are also suitable for developing niche skillsets used in the IT/electronics industries. Engineering students can also take up certifications to fulfil their academic requirements or for researching advanced topics.     </p>

                                    <div className="section-heading pt-3">
                                        <h4>IoT Full Stack Developer Certificate </h4>
                                    </div>
                                    <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of a web application for managing IoT devices.</p>

                                    <div className="section-heading pt-3">
                                        <h4>IoT Android Developer Certificate </h4>
                                    </div>
                                    <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development or testing of a mobile application or a human machine interface on an Android device. The HMI should be used for managing an IoT device, while the mobile app may use inbuild sensors in the Android device. </p>

                                    <div className="section-heading pt-3">
                                        <h4>IoT Cloud Developer Certificate </h4>
                                    </div>
                                    <p>This certification is based on successfully executing a project where at least 100 hours has been spent towards the design, development, testing and deployment of a UI application for managing IoT devices and at least 150 hours has been spent towards SAAS integrations with third party platforms or cloud native services. </p>

                                    <div className="section-heading pt-3">
                                        <h4>IoT Embedded Developer Certificate </h4>
                                    </div>
                                    <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of an embedded application on an IoT device.</p>

                                    <div className="section-heading pt-3">
                                        <h4>IoT Blockchain Developer Certificate </h4>
                                    </div>
                                    <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of a blockchain as a backend system to manage data from IoT devices.</p>

                                    <div className="section-heading pt-3">
                                        <h4>IoT AI/ML Developer Certificate</h4>
                                    </div>

                                    <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of a computational model, working with data from an IoT device.</p>
                                    <p>Foundational certifications typically place a workload of 25-30 hr/ week and can take 12-16 weeks to execute. Each certification may require 7-10 project consultations. The cost of capsules can range between INR 2000 to INR 10000 for generic hardware.    For additional information and registrations email atanurc@capsulelabs.in </p>
                                    

                                </div>

                                <div className={act === 1 ? "d-show" : "d-none"}>
                                    <div className="section-heading pb-3">
                                        <h2>Advanced  <em>Certifictions</em></h2>
                                    </div>
                                    <p>Advanced certifications can take 24-32 weeks to complete and specialized imported hardware can cost INR 10k-100k.  For additional information and registrations email atanurc@capsulelabs.in </p>

                                    <div className="section-heading pb-3">
                                        <h4>IoT Developer Certificate </h4>
                                    </div>

                                    <p>This certification is based on successfully executing a project where at least 500 hours has been spent towards the design, development, testing and deployment of an IoT system, comprising of IoT end devices and an IoT data and device management application. Following certifications can be upgraded to an IoT Developer certificate by fulfilling the additional scope/effort requirements. </p>

                                    <div className="">
                                        <ul className="p-0 m-0 dualList">
                                            <li>IoT Full Stack certificate </li>
                                            <li>IoT Android Developer Certificate </li>
                                            <li>IoT Cloud Developer Certificate </li>
                                            <li>IoT Blockchain Developer Certificate</li>
                                            <li>IoT Embedded Developer Certificate</li>
                                            <li>IoT AI/ML Developer Certificate</li>
                                        </ul>
                                    </div>

                                    <div className="section-heading pb-3">
                                        <h4>AIoT Developer Certificate </h4>
                                    </div>

                                    <p>This certification is based on successfully executing a project where at least 750 hours has been spent towards the design, development, testing and deployment of an AI enabled IoT system, comprising of self-learning IoT devices and an IoT data and device management application. Following certifications can be upgraded to an IoT Developer certificate by fulfilling the additional scope/effort requirements. </p>

                                    <div className="">
                                        <ul className="p-0 m-0 dualList">
                                            <li>IoT Full Stack certificate </li>
                                            <li>IoT Android Developer Certificate </li>
                                            <li>IoT Cloud Developer Certificate </li>
                                            <li>IoT Blockchain Developer Certificate</li>
                                            <li>IoT Embedded Developer Certificate</li>
                                            <li>IoT AI/ML Developer Certificate</li>
                                            <li>IoT Developer Certificate</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className={act === 2 ? "d-show" : "d-none"}>

                                    <div className="section-heading pb-3">
                                        <h2>Advisory <em>Services</em></h2>
                                    </div>

                                    <p>Capsule Labs advisory services are available towards institutional improvements and IoT evangelization. For appointments email atanurc@capsulelabs.in </p>

                                    <div className="section-heading pb-3">
                                        <h4>Webinars and motivational speaking services </h4>
                                    </div>

                                    <p>This service is available to institutions to create awareness around emerging area among their learners. Sessions are typically 1- 2 hours in duration. Our speaking topics include, but not limited to the following area:</p>
                                    <p> a)	Intelligence in IoT </p>
                                    <p> b)	IoT applications and career opportunities</p>
                                    <p> c)	Blockchain and its role in IoT</p>
                                    <p> d)	Managing IoT systems – a device management perspective </p>
                                    <p> e)	Managing IoT systems – a data management perspective </p>
                                    <p> f)	Smart Cities around the world</p>
                                    <p> g)	Solving the employer’s dilemma – beyond campus placements </p>
                                    
                                    <div className="section-heading pb-3">
                                        <h4>Extended webinars and workshops </h4>
                                    </div>

                                    <p>This service is available to institutions for engaging their faculty members or onboarding new teams. The sessions are spread out over multiple days and can be delivered online, on campus or at getaway locations. The session content and duration are customized for the audience. </p>

                                    <div className="section-heading pb-3">
                                        <h4>Curriculum building services </h4>
                                    </div>

                                    <p>This service is available to institutions planning to start offering courses in IoT and require advisory services for curriculum building, content creation or lab development services. This service is available on a retainership model. </p>

                                </div>


                            </div>

                        </div>
                        <div className="col-lg-4">
                        <div className="menu">
                            <div className={act === 0 ? "active" : ""} onClick={()=>showAct(0)}>
                                <div className="thumb">
                                    <div>
                                        <Image width={416} height={146} layout="responsive" src="/assets/images/video-thumb-01.png" alt=""/>
                                    </div>
                                    <div className="inner-content">
                                        <h4>Foundational Certifications</h4>
                                    </div>
                                </div>
                            </div>

                            <div className={act === 1 ? "active" : ""} onClick={()=>showAct(1)}>
                                <div className="thumb">
                                    <div>
                                        <Image width={416} height={146} layout="responsive" src="/assets/images/video-thumb-02.png" alt=""/>
                                    </div>
                                    <div className="inner-content">
                                        <h4>Advanced Certificationst</h4>
                                    </div>
                                </div>
                            </div>

                            <div className={act === 2 ? "active" : ""} onClick={()=>showAct(2)}>
                                <div className="thumb">
                                    <div>
                                        <Image width={416} height={146} layout="responsive" src="/assets/images/video-thumb-03.png" alt="Marketing"/>
                                    </div>
                                    <div className="inner-content">
                                        <h4>Advisory Services</h4>
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
            </div>
        </div>
    )
}


export default Services;