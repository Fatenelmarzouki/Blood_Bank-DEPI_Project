import React from 'react';
import person from '../../assets/imgs/team/person.jpg';
export default function Team ()
{
    return (
        <>
            <section className='team'>
                <div className="container">
                    <div className="row justify-content-around">
                        <h1 className='text-center py-5'>Our Team</h1>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-3">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Eslam Saeid Farghaly</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-3">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Faten Mohamed Elmarzouki</h5>
                                <p className='pt-2'>https://github.com/Fatenelmarzouki</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-3">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Aya Ahmed El-Sayed</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-3">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Sherine Fathi khalifa</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-3">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Heba sherif kilany</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-3">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Safaa Adlan Eldesuki</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-3">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Osama Bahi Eldin</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-3">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Zakarya Hamdy Zakarya</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="member text-center p-4 py-4 rounded-3 shadow mb-3">
                                <img src={ person } alt="person_picture" className='col-7 rounded-circle' />
                                <h5 className='pt-2'>Marina Raafat Zakher</h5>
                                <p className='pt-2'>Your GitHub Link</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
