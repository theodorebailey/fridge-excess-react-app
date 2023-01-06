import React from "react";

import './Footer.css';

function Footer () {

    return (
        <section className="footer">
            {/* horizontal line break */}
            <hr className="footer-seperator"/>
            <section className="footer-social-media">
                <a href="/" target="_blank">Linkedin</a>
                <a href=""></a>
                <a href="/" target="_blank">Youtube</a>
                <a href=""></a>
                <a href="/" target="_blank">Facebook</a>
            </section>
            <section className="footer-info">
                <div className="footer-info-left">
                    <div className="footer-info__name">
                        Theodore Bailey
                    </div>
                    <div className="footer-info__returns">
                        Returns Policy
                        <br />
                        Delivery
                    </div>
                </div>
                <div className="footer-info-center">
                    <div className="footer-info__email">
                        fridgeExcess@gmail.com
                    </div>
                    <div className="footer-info__terms">
                        Terms and Conditions
                        <br />
                        Copyright
                    </div>
                </div>
                <div className="footer-info-right">
                    <div className="footer-info__number">
                        0123 4567 8910                      
                    </div>
                    <div className="footer-info__contact">
                        Our Story
                        <br />
                        Contact Us
                    </div>
                </div>
            </section>
            <hr className="footer-seperator"/>
        </section>
    )
}

export default Footer;