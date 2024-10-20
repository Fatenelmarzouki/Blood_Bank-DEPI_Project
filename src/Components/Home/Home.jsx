import React from 'react';
import './home.css';
import { Link, NavLink } from 'react-router-dom';
import process_1 from '../../assets/imgs/home/process/process_1.jpg';
import process_2 from '../../assets/imgs/home/process/process_2.jpg';
import process_3 from '../../assets/imgs/home/process/process_3.jpg';
import process_4 from '../../assets/imgs/home/process/process_4.webp';
import volunteer_img from '../../assets/imgs/team/person.jpg';
import camp_1 from '../../assets/imgs/home/campagins/camp_1.jpg';
import camp_2 from '../../assets/imgs/home/campagins/camp_2.jpg';
import camp_3 from '../../assets/imgs/home/campagins/camp_3.jpg';
import camp_4 from '../../assets/imgs/home/campagins/camp_4.jpg';
import gallery_1 from '../../assets/imgs/home/campagins/gallery_1.jpg';
import blog_2 from '../../assets/imgs/home/blog/blog_2.jpg';
import blog_3 from '../../assets/imgs/home/blog/blog_3.jpg';
export default function Home ()
{
  return (
    <>
      {/* first section */ }
      <section className='home_1'>
        <div className='block'>
          <div className="container z-3 text-center position-relative px-2">
            <div className="row py-5 align-items-center flex-column justify-content-center">
              <div className="col-12 text-uppercase">
                <h3 className='mb-4'>donate blood , save life !</h3>
                <h1 className='fw-bolder'>your donation can bring <br /> smile at others face</h1>
                <Link to='/home' className='btn btn-danger rounded-0 py-lg-3 px-lg-4 py-2 px-3 mt-3 fw-semibold'>donate now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* request to appointment */ }
      <section className='home_2'>
        <div className="container py-5 ">
          <div className="row">
            <div className="col-xl-8 ">
              <h4 className='text-uppercase fw-semibold '>We are helping people from 50 years</h4>
              <p>You can give blood at any of our blood donation venues all over the world. We have total sixty thousands donor centers and visit thousands of other venues on various occasions.</p>
            </div>
            <div className="col-xl-4 align-self-center">
              <Link to='/request' className='btn btn-danger rounded-0 py-lg-2 py-3 px-5 text-uppercase fw-bolder bt-line mt-3'>request appointment</Link>
            </div>
          </div>
        </div>
      </section>
      {/* donation process */ }
      <section className='donation pad-110'>
        <div className="container-fluid">
          <div className="text-head pb-4">
            <h1 className='text-center text-uppercase mb-lg-2'>donation process</h1>
            <div className='icon d-flex justify-content-center my-lg-4'>
              <span className='position-relative'>
                <i className="fa-solid fa-droplet"></i>
              </span>
            </div>
            <p className='text-center '>The donation process from the time you arrive center until the time you leave</p>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-md-6 col-sm-12">
              <div className="process mb-5">
                <div className="img-process position-relative pro_1">
                  <img src={ process_1 } alt="process" />
                </div>
                <div className="content-process p-3">
                  <h3 className='text-uppercase my-4'>registration</h3>
                  <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 col-sm-12">
              <div className="process mb-5">
                <div className="img-process position-relative pro_2">
                  <img src={ process_2 } alt="process" />
                </div>
                <div className="content-process p-3">
                  <h3 className='text-uppercase my-4'>screening</h3>
                  <p>A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 col-sm-12">
              <div className="process mb-5">
                <div className="img-process position-relative pro_3">
                  <img src={ process_3 } alt="process" />
                </div>
                <div className="content-process p-3">
                  <h3 className='text-uppercase my-4'>donation</h3>
                  <p>After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6 col-sm-12">
              <div className="process mb-5">
                <div className="img-process position-relative pro_4">
                  <img src={ process_4 } alt="process" />
                </div>
                <div className="content-process p-3">
                  <h3 className='text-uppercase my-4'>refreshment</h3>
                  <p>You can also stay in sitting room until you feel strong enough to leave our center. You will receive awesome drink from us in donation zone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counter */ }
      <section className='counter text-uppercase text-center pad-110'>
        <div className="container">
          <div className="row">
            <div className='col-xl-3 col-md-6 col-sm-12'>
              <div className="counter-content py-5 rounded-1 mb-3">
                <div className="counter-icon my-2"><i class="fa-solid fa-heart-pulse"></i> </div>
                <div className="counter-text">
                  <h1 className='text-danger fw-semibold my-3'>2578</h1>
                  <h4>success smile</h4>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 col-sm-12'>
              <div className="counter-content py-5 rounded-1 mb-3">
                <div className="counter-icon my-2"><i class="fa-solid fa-stethoscope"></i></div>
                <div className="counter-text">
                  <h1 className='text-danger fw-semibold my-3'>3235</h1>
                  <h4>happy donors</h4>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 col-sm-12'>
              <div className="counter-content py-5 rounded-1 mb-3">
                <div className="counter-icon my-2"><i class="fa-solid fa-users"></i></div>
                <div className="counter-text">
                  <h1 className='text-danger fw-semibold my-3'>3658</h1>
                  <h4>happy recipient</h4>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 col-sm-12'>
              <div className="counter-content py-5 rounded-1 mb-3">
                <div className="counter-icon my-2"><i class="fa-solid fa-award"></i></div>
                <div className="counter-text">
                  <h1 className='text-danger fw-semibold my-3'>1364</h1>
                  <h4 >total awards</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Volunteers */ }
      <section className='volunteers pad-110'>
        <div className="container px-5">
          <div className="text-head pb-4">
            <h1 className='text-center text-uppercase mb-lg-2'>our volunteers</h1>
            <div className='icon d-flex justify-content-center my-lg-4'>
              <span className='position-relative'>
                <i className="fa-solid fa-droplet"></i>
              </span>
            </div>
            <p className='text-center'>The volunteers who give their time and talents help to fulfill our mission.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="volunteer text-center border border-2 mb-3">
                <div className="volunteer-img">
                  <img src={ volunteer_img } alt="volunteer" />
                </div>
                <div className="volunteer-content text-uppercase my-4 border-bottom border-2 pb-3">
                  <h3>alexander gary</h3>
                  <h4 >co-founder</h4>
                </div>
                <div className="volunteer-icons mb-4">
                  <ul className='d-flex justify-content-center align-items-center'>
                    <li><i class="fa-brands fa-facebook  text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                    <li><i class="fa-brands fa-twitter  text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                    <li><i class="fa-brands fa-google-plus-g  text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                    <li><i class="fa-brands fa-linkedin-in text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="volunteer text-center border border-2 mb-3">
                <div className="volunteer-img">
                  <img src={ volunteer_img } alt="volunteer" />
                </div>
                <div className="volunteer-content text-uppercase my-4 border-bottom border-2 pb-3">
                  <h3>melissa munoz</h3>
                  <h4 >founder</h4>
                </div>
                <div className="volunteer-icons mb-4">
                  <ul className='d-flex justify-content-center align-items-center'>
                    <li><i class="fa-brands fa-facebook  text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                    <li><i class="fa-brands fa-twitter  text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                    <li><i class="fa-brands fa-google-plus-g  text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                    <li><i class="fa-brands fa-linkedin-in text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="volunteer text-center border border-2 mb-3">
                <div className="volunteer-img">
                  <img src={ volunteer_img } alt="volunteer" />
                </div>
                <div className="volunteer-content text-uppercase my-4 border-bottom border-2 pb-3">
                  <h3>john abraham</h3>
                  <h4 >manager</h4>
                </div>
                <div className="volunteer-icons mb-4">
                  <ul className='d-flex justify-content-center align-items-center'>
                    <li><i class="fa-brands fa-facebook  text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                    <li><i class="fa-brands fa-twitter  text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                    <li><i class="fa-brands fa-google-plus-g  text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                    <li><i class="fa-brands fa-linkedin-in text-danger border border-2 bg-white p-2 fs-5 me-2"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* join us */ }
      <section className='join-us pad-110'>
        <div className="container text-white text-center text-uppercase">
          <div className="row justify-content-center">
            <div className="col-10">
              <h1 className='mb-5'>join with us and save life</h1>
              <Link to='/home' className='btn btn-danger py-3 px-4'>become volunteer</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Campaigns */ }
      {/* <section className='campaigns pad-110'>
        <div className="container-fluid">
          <div className="text-head pb-4">
            <h1 className='text-center text-uppercase mb-lg-2'>donation campaigns</h1>
            <div className='icon d-flex justify-content-center my-lg-4'>
              <span className='position-relative'>
                <i className="fa-solid fa-droplet"></i>
              </span>
            </div>
            <p className='text-center '>Campaigns to encourage new donors to join and existing to continue to give blood.</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="camp-block">
                <div className="row">
                  <div className="col-xl-4 d-xl-block d-none">
                    <div className="camp-img ">
                      <img src={ camp_1 } alt="Campaigns" />
                    </div>
                  </div>
                  <div className="col-xl-8 col-sm-12">
                    <div className="camp-text px-3">
                      <span className='box text-white px-3 py-1'>14 June, 2017</span>
                      <h3 className='text-uppercase text-danger my-4'>world blood donors day</h3>
                      <p>Every year, on 14 June, countries around the world celebrate World Blood Donor Day. The event serves to thank voluntary.</p>
                      <div className="details d-flex">
                        <span className='me-2'><i class="fa-regular fa-clock"></i> 10.00am - 3.00pm</span>
                        <span className='border-start border-2'><i class="fa-solid fa-location-dot"></i> California, USA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* gallery */ }
      <section className='gallery pad-110'>
        <div className="container">
          <div className="text-head pb-4">
            <h1 className='text-center text-uppercase mb-lg-2'>photo gallery</h1>
            <div className='icon d-flex justify-content-center my-lg-4'>
              <span className='position-relative'>
                <i className="fa-solid fa-droplet"></i>
              </span>
            </div>
            <p className='text-center'>Campaign photos of different parts of world and our prestigious voluntary work</p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12  mb-3">
              <div className="work-box">
                <div className="work-image overflow-hidden" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <img src={ camp_1 } alt="" />
                </div>
                {/* <!-- Modal --> */ }
                <div className="modal fade" id="exampleModal" tabindex="-1"
                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <img src={ camp_1 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12  mb-3">
              <div className="work-box">
                <div className="work-image overflow-hidden" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <img src={ camp_2 } alt="" />
                </div>
                {/* <!-- Modal --> */ }
                <div className="modal fade" id="exampleModal" tabindex="-1"
                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <img src={ camp_2 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12  mb-3">
              <div className="work-box">
                <div className="work-image overflow-hidden" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <img src={ camp_3 } alt="" />
                </div>
                {/* <!-- Modal --> */ }
                <div className="modal fade" id="exampleModal" tabindex="-1"
                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <img src={ camp_3 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12  mb-3">
              <div className="work-box">
                <div className="work-image overflow-hidden" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <img src={ camp_4 } alt="" />
                </div>
                {/* <!-- Modal --> */ }
                <div className="modal fade" id="exampleModal" tabindex="-1"
                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <img src={ camp_4 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12  mb-3">
              <div className="work-box">
                <div className="work-image overflow-hidden" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <img src={ gallery_1 } alt="" />
                </div>
                {/* <!-- Modal --> */ }
                <div className="modal fade" id="exampleModal" tabindex="-1"
                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <img src={ gallery_1 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-3">
              <div className="work-box">
                <div className="work-image overflow-hidden" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <img src={ camp_2 } alt="" />
                </div>
                {/* <!-- Modal --> */ }
                <div className="modal fade" id="exampleModal" tabindex="-1"
                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <img src={ camp_2 } alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* opinions */ }
      <section className='opinion pad-110'>
        <div className="opinion-block">
          <div className="container text-center">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active border border-3 rounded-1" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2" className="border border-3 rounded-1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3" className="border border-3 rounded-1"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <h3 className='text-uppercase fw-bold mb-5'>Donor Opinion</h3>
                  <div className="row justify-content-center">
                    <div className="col-lg-10 col-sm-12">
                      <p className='fw-medium mb-5'><i class="fa-solid fa-quote-left"></i>I proudly donate blood on a regular basis because it gives others something they desperately need to survive. Just knowing I can make a difference in someone else’s life makes me feel great!<i class="fa-solid fa-quote-right"></i></p>
                    </div>
                  </div>
                  <h6 className='fw-bold text-uppercase'>Brandon Munson</h6>
                  <span className='text-uppercase mb-5'>CTO, Fulcrum Design, USA</span>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <h3 className='text-uppercase fw-bold mb-5'>Recipient Opinion</h3>
                  <div className="row justify-content-center">
                    <div className="col-lg-10 col-sm-12">
                      <p className=' fw-medium mb-5'><i class="fa-solid fa-quote-left"></i>I wish I could tell you my donor how grateful I am for your selfless act.You gave me new life. We may be coworkers or schoolmates or just two in the same community.I'm very grateful to you.<i class="fa-solid fa-quote-right"></i></p>
                    </div>
                  </div>
                  <h6 className='fw-bold text-uppercase'>Brandon Munson</h6>
                  <span className='text-uppercase mb-5'>CTO, Fulcrum Design, USA</span>
                </div>
                <div className="carousel-item">
                  <h3 className='text-uppercase fw-bold mb-5'>Donor Opinion</h3>
                  <div className="row justify-content-center">
                    <div className="col-lg-10 col-sm-12">
                      <p className=' fw-medium mb-5'><i class="fa-solid fa-quote-left"></i>I have been a donor since high school. Although I have not been a donor every year, I always want to give to the human race. I love to help others! Moreover it gives a real peace in my mind.<i class="fa-solid fa-quote-right"></i></p>
                    </div>
                  </div>
                  <h6 className='fw-bold text-uppercase'>Brandon Munson</h6>
                  <span className='text-uppercase mb-5'>CTO, Fulcrum Design, USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*recent blog */ }
      <section className='blog pad-110'>
        <div className="container">
          <div className="text-head pb-4">
            <h1 className='text-center text-uppercase mb-lg-2'>recent blog</h1>
            <div className='icon d-flex justify-content-center my-lg-4'>
              <span className='position-relative'>
                <i className="fa-solid fa-droplet"></i>
              </span>
            </div>
            <p className='text-center'>Latest news and statements regarding giving blood, blood processing and supply.</p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="blog-block mb-3">
                <div className="blog-img">
                  <img src={ gallery_1 } alt="blog_photo" />
                </div>
                <div className="blog-text p-3">
                  <h3 className='text-uppercase text-danger mt-3'>Blood Connects Us All in a Soul</h3>
                  <span className=' me-2 fw-bold'><i class="fa-regular fa-clock"></i> April 4, 2017</span>
                  <span className='fw-bold'><i class="fa-regular fa-comment"></i> 10 Comments</span>
                  <p className='mt-2'>In many countries, demand exceeds supply, and blood services face the challenge of making blood available for patient.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="blog-block mb-3">
                <div className="blog-img">
                  <img src={ blog_2 } alt="blog_photo" />
                </div>
                <div className="blog-text p-3">
                  <h3 className='text-uppercase text-danger mt-3'>Give Blood and Save three Lives</h3>
                  <span className=' me-2 fw-bold'><i class="fa-regular fa-clock"></i> April 4, 2017</span>
                  <span className='fw-bold'><i class="fa-regular fa-comment"></i> 10 Comments</span>
                  <p className='mt-2'>To save a life, you don’t need to use muscle. By donating just one unit of blood, you can save three lives or even several lives.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="blog-block mb-3">
                <div className="blog-img">
                  <img src={ blog_3 } alt="blog_photo" />
                </div>
                <div className="blog-text p-3">
                  <h3 className='text-uppercase text-danger mt-3'>Why Should I donate Blood ?</h3>
                  <span className=' me-2 fw-bold'><i class="fa-regular fa-clock"></i> April 4, 2017</span>
                  <span className='fw-bold'><i class="fa-regular fa-comment"></i> 10 Comments</span>
                  <p className='mt-2'>Blood is the most precious gift that anyone can give to another person.Donating blood not only saves the life also donors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
