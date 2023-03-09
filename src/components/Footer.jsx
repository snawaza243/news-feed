import React from 'react'

import { Link, Outlet } from 'react-router-dom';
export function Footer() {
    // Script from W3 Schools  
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("to-top").style.display = "block";
        } else {
            document.getElementById("to-top").style.display = "none";
        }
    }
    return (

        <>

            <footer className="bg-dark text-center text-white">
                <div className="container p-2">
                    <section className="footerPages">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="subscriptionButton d-flex justify-content-center">
                                    <ul className="list-unstyled mb-0 d-inline-flex align-items-center">
                                        <li className='topListItem primary p-1'><Link to="./" >Home</Link></li>
                                        <li className='topListItem primary p-1'><Link to="https://www.indiantechnoera.in" >Blog</Link></li>
                                        <li className='topListItem primary p-1'><Link to="./about" >About</Link></li>
                                        <li className='topListItem primary p-1'><Link to="./contact" >Contact</Link></li>
                                        <li className='topListItem primary p-1'><Link to="./disclaimer">Disclaimer</Link></li>
                                        <li className='topListItem primary p-1'><Link to="./privacy" >Privacy</Link></li>
                                        <li className='topListItem primary p-1'><Link to="./terms" >Terms</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="mb-4">
                        <a className="footerSocialIconHover btn btn-outline-light btn-floating m-1" href="https://facebook.com/snawaza243" role="button"><i
                            className="fab fa-facebook-f"></i></a>
                        <a className="footerSocialIconHover btn btn-outline-light btn-floating m-1" href="https://twitter.com/snawaza243" role="button"><i
                            className="fab fa-twitter"></i></a>
                        <a className="footerSocialIconHover btn btn-outline-light btn-floating m-1" href="https://google.com/snawaza243" role="button"><i
                            className="fab fa-google"></i></a>
                        <a className="footerSocialIconHover btn btn-outline-light btn-floating m-1" href="https://instagram.com/snawaza243" role="button"><i
                            className="fab fa-instagram"></i></a>
                        <a className="footerSocialIconHover btn btn-outline-light btn-floating m-1" href="https://linkedin.com/in/.com/snawaza243" role="button"><i
                            className="fab fa-linkedin-in"></i></a>
                        <a className="footerSocialIconHover btn btn-outline-light btn-floating m-1" href="https://github.com/snawaza243" role="button"><i
                            className="fab fa-github"></i></a>
                    </section>

                    <section className="suscripitonSection">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                </div>

                                <div className="subscriptionButton d-flex justify-content-center">
                                    <div className="col-md-5 col-12">
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="form5Example21" placeholder='Email address...' className="form-control "  />
                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <button onClick={(e)=>{e.preventDefault()}} type="submit" className="footerSubBtnHover btn btn-outline-light mb-4 ">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="text-center p-1">
                    <h6>
                        Developed with ❤️ by <a href="https://www.codesam.in"  className='text-white text-decoration-none'><b className='creditText'>CodeSam</b></a>
                    </h6>
                    <p>© 2023 Copyright : <Link to={"./"} className="text-white text-decoration-none"><b className='creditText'>News Feed</b></Link></p>
                </div>
            </footer>
            <Outlet />
        </>
    )
}

