import React from 'react';

export default function Contact ()
{
  return (
    <>
      <section className="contact pad-110">
        <div className="container">
          <div className="text-head pb-4">
            <h1 className='text-center text-uppercase mb-lg-2'>contact us</h1>
            <div className='icon d-flex justify-content-center my-lg-4'>
              <span className='position-relative'>
                <i className="fa-solid fa-droplet"></i>
              </span>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8">
              <form action="">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-sm-12">
                    <div className="row mb-3">
                      <div className="col-lg-6 col-sm-12">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">First Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your First Name" />
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Last Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Last Name" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Email</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold">Message</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                    <button type="button" className='btn bg-black text-white py-2 px-4'>Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
