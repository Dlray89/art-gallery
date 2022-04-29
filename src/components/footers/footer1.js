import React from "react";
import fb from '../../assets/icon-facebook.svg'
import instagram from '../../assets/icon-instagram.svg'
import twitter from '../../assets/icon-twitter.svg'

const socialMedia = [
    {
        link: 'www.facebook.com',
        img: fb
    },
    {
        link: 'www.instagram.com',
        img: instagram
    },
    {
        link: 'www.twitter.com',
        img: twitter
    },
]

export const Footer1 = () => {
    return (
        <div className="footer-container">

            <div className="footer-container__title-box">
                <h4 className="footer-container__title-box--title">Modern</h4>
                <h4 className="footer-container__title-box--title">Art Gallery</h4>
            </div>

            <div className="footer-container__subtext-box">
                <p className="footer-container__subtext-box--subtext">
                    The modern art gallery is free to all visitors and open seven days a week from 8am to 9am. Find us at 99 King Street, Newport, USA
                </p>
            </div>

            <div className="footer-container__social-media-box">
                {socialMedia.map(link => (
                    <a className="footer-container__social-media-box__links" href={link.link}>
                        <img className="footer-container__social-media-box__links--link" alt='social media icons' src={link.img} />
                    </a>
                ) )}
            </div>
        </div>
    )
}