import React from 'react';
import person from '../../assets/imgs/team/person.jpg';
export default function Team ()
{
    return (
        <>
            <section className='team pad-110'>
                <div className="container">
                    <div className="text-head pb-4">
                        <h1 className='text-center text-uppercase mb-lg-2'>our team</h1>
                        <div className='icon d-flex justify-content-center my-lg-4'>
                            <span className='position-relative'>
                                <i className="fa-solid fa-droplet"></i>
                            </span>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-4">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Eslam Saeid Farghaly</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-4">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Faten Mohamed Elmarzouki</h5>
                                <p className='pt-2'>https://github.com/Fatenelmarzouki</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-4">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Aya Ahmed El-Sayed</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-4">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Sherine Fathi khalifa</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-4">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Heba sherif kilany</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
