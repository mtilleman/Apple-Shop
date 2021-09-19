import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col">
                        <div className="copywrite">
                    <i>2021 &copy; <em id="date"></em> Michael Tilleman</i>
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className="social">
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">Instagram<i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/">Facebook<i className="fa fa-facebook" /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">Twitter<i className="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/">Youtube<i className="fa fa-youtube" /></a> 
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    );

}


export default Footer;