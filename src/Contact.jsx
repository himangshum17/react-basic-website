import React from 'react';
import BreadCrumb from './Components/BreadCrumb';

const Contact = () => {
    const submitForm = (e) => {
      e.preventDefault();
    }
    return (
        <>
        <BreadCrumb activeLink={"Contact"} tiTle={"Contact"}/>
        <section className="section5">
            <div className="container">
                <div className="row">
                    <div className="column half m-auto">
                         <div className="section5-inner">
                         <h1>Have any queries? feel free to ask</h1>
                             <form onSubmit={submitForm}>
                                 <div className="form-group">
                                     <label htmlFor="name">Full Name</label>
                                     <input type="text" id="name" />
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="email">Email Address</label>
                                     <input type="email" id="email" />
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="message">Message</label>
                                     <textarea id="message" rows="6"></textarea>
                                 </div>
                                 <div className="form-group">
                                     <button type="submit" className="btn">submit</button>
                                 </div>
                             </form>
                         </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;
