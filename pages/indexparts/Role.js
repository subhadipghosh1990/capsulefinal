import Link from 'next/link'
import Image from 'next/image'
import React from "react";
import RadarChart from 'react-svg-radar-chart';
const Role = () => {


    const data = [
        {
          data: {
            battery: 0.7,
            design: .8,
            useful: 0.9,
            speed: 0.67,
            weight: 0.8
          },
          meta: { color: 'blue' }
        },
        {
          data: {
            battery: 0.6,
            design: .85,
            useful: 0.5,
            speed: 0.6,
            weight: 0.7
          },
          meta: { color: 'red' }
        }
      ];
  
  const captions = {
        // columns
        battery: 'Battery Capacity',
        design: 'Design',
        useful: 'Usefulness',
        speed: 'Speed',
        weight: 'Weight'
      };


    return(
        <section className="pt-5 position-relative role">

<div className="services-right-dec">
<Image width={305} height={305} layout="responsive" src="/assets/images/services-right-dec.png" alt=""/>
</div>

<div className="videos-right-dec">
    <div>
        <Image width={523} height={720} layout="responsive" src="/assets/images/videos-right-dec.png" alt=""/>
    </div>
</div>

            <div className="container">

                <div className="row justify-content-center">               

                    <div className="col-md-12 text-center">

                        <div className="section-heading">
                            <h2>Kickstart your <em>WorkEx</em></h2>
                            <p>Let your hiring manger know about your technology and role fitments</p>
                        </div>

                        <RadarChart
                            captions={captions}
                            data={data}
                            size={300}
                        />                        
                    </div>                  

                </div>

                <div className="row mt-5">

                    <div className="col-md-6 borderRight">
                        <div className="section-heading d-md-flex justify-content-end">
                            <h2 className=""><em>Role Fitment</em></h2>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="section-heading">
                            <h2><span>Tech Fitment</span></h2>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-12 text-center">
                        <p className="py-3 m-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <div className="main-blue-button-hover pt-4"><a href="#">Search</a></div>
                    </div>

                </div>

            </div>
        </section>
    )
}


export default Role;