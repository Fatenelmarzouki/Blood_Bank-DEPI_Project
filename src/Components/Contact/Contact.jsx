import React from 'react';

export default function Contact ()
{
  return (
    <>
      <section className="contact pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <h1 className='py-5 text-center'>Contact Us</h1>
              <form action="">
                <div className="row justify-content-center">
                  <div className="col-lg-10 col-sm-12">
                    <div className="row mb-3">
                      <div className="col-lg-6 col-sm-12">
                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your First Name" />
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Last Name" />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
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
