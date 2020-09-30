import React from 'react';
import BreadCrumb from './Components/BreadCrumb';
import ImageContentHorizontal from './Components/ImageContentHorizontal';
import ImageContentVertical from './Components/ImageContentVertical';
import TeamCard from './Components/TeamCard';

const About = () => {
    return (
        <>
         <BreadCrumb/>
         <ImageContentHorizontal/>
         <section className="section3">
             <div className="container">
                <h2>Our Team Section</h2>
                 <div className="row">
                     <div className="column three">
                         <TeamCard/>
                     </div>
                     <div className="column three">
                         <TeamCard/>
                     </div>
                     <div className="column three">
                         <TeamCard/>
                     </div>
                     <div className="column three">
                         <TeamCard/>
                     </div>
                 </div>
             </div>
         </section>
         <ImageContentVertical/>
        </>
    )
}

export default About;
