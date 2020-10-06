import React from 'react';
import BreadCrumb from './Components/BreadCrumb';
import Service from './Components/Service';

const Services = () => {
    return (
        <>
        <BreadCrumb activeLink={"Services"} tiTle={"Services"}/>
        <section className="section4">
            <div className="container">
            <h2>Services that we provide</h2>
                <div className="row">
                  <div className="column four">
                    <Service/>
                  </div>
                  <div className="column four">
                    <Service/>
                  </div>
                  <div className="column four">
                    <Service/>
                  </div>
                  <div className="column four">
                    <Service/>
                  </div>
                  <div className="column four">
                    <Service/>
                  </div>
                  <div className="column four">
                    <Service/>
                  </div>
                  <div className="column four">
                    <Service/>
                  </div>
                  <div className="column four">
                    <Service/>
                  </div>
                  <div className="column four">
                    <Service/>
                  </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services;
