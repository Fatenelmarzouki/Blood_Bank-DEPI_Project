import React from 'react'
import about_img from '../../assets/imgs/about/Blood donation-rafiki.png'
export default function About() {
  return (
    <>
      <section className="about pad-110">
        <div className="container">
          <div className="text-head">
            <h1 className='text-center text-uppercase mb-lg-2'>about us</h1>
            <div className='icon d-flex justify-content-center my-lg-4'>
              <span className='position-relative'>
                <i className="fa-solid fa-droplet"></i>
              </span>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-7 col-sm-12 pt-5">
              <p className='py-4' >At Vital Website, we believe that every drop of blood can make a world of difference. We are committed to providing a safe, reliable, and accessible blood donation service to support hospitals, clinics, and patients in critical need. Our blood bank serves as a vital link between compassionate donors and those whose lives depend on timely blood transfusions.

                We understand the importance of community and the power of giving. Through education, awareness, and efficient services, we aim to inspire more people to join our life-saving mission. Whether you’re a first-time donor or a seasoned contributor, your generosity plays a crucial role in saving lives and strengthening the health of our community.

                Together, we can build a future where no life is at risk due to a lack of blood. Join us today, and help make a lasting impact, one donation at a time.
              </p>
            </div>
            <div className="col-lg-5 d-lg-block d-none">
              <img src={about_img} alt="image" />
            </div>
          </div>
        </div>
    </section>
    </>
  )
}
