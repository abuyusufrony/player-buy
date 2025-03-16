import React from 'react';
import shadow from '../../assets/bg-shadow.png'
import logo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <div className="relative ">
                    <div><h2 className='h-32 bg-black'></h2></div>
                    <div className='h-60 w-lg absolute -mt-64 ml-96 bg-amber-50 text-center rounded-b-lg  '> <h2 className='text-2xl font-bold mb-1.5'>Suscribe To our News letter</h2>
                        <p>Get the latest updates and news right in your inbox!</p>
                        <div className="join mt-10">
                            <div className=''>
                                <label className="input validator join-item ">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                    <input type="email" placeholder="mail@site.com" required />
                                </label>
                                <div className="validator-hint hidden">Enter valid email address</div>
                            </div>
                            <button className="btn btn-neutral join-item ml-3.5 bg-amber-600 text-black">Suscribe</button>
                        </div>
                    </div>
                    <div className='absolute ml-96 w-max h-max'><img className=' w-20' src={logo} alt="" /></div>
                </div>
                <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 ">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                        <div className="join ">
                            <div className=''>
                                <label className="input validator join-item ">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                    <input type="email" placeholder="mail@site.com" required />
                                </label>
                                <div className="validator-hint hidden">Enter valid email address</div>
                            </div>
                            <button className="btn btn-neutral join-item  bg-amber-600 text-black">Suscribe</button>
                        </div>
                    </nav>
                </footer>
            </div>

        </div>
    );
};

export default Footer;