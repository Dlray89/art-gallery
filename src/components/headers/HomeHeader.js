import React from "react";
import arrow from '../../assets/icon-arrow-right.svg'



export const HomeHeader = () => {
    return (
        <>
            <div className="header-container">

                <div className="header-container__content-box" >

                    <div className="header-container__content-box__title-box">
                        <h1 className="header-container__content-box__title-box--title">Modern </h1>
                        <h1 className="header-container__content-box__title-box--title">Art Gall<span className="header-container__content-box__title-box--title--spec-text">ery</span></h1>
                    </div>

                    <div className="header-container__content-box__subtext-location-btn" >
                        <p className="header-container__content-box__subtext-location-btn--subtext">The arts in the collection of the Modern Art Gallery all started from a spark of inspration. WIll these pieces inspire you? Visit us and find out</p>

                        <button className="header-container__content-box__subtext-location-btn--btn">

                            <p className="header-container__content-box__subtext-location-btn--btn__text">Our Location</p>

                            <div className="header-container__content-box__subtext-location-btn--btn__icon-box">
                                <img alt='arrow icon' className="header-container__content-box__subtext-location-btn--btn__icon-box--icon" src={arrow} />
                            </div>

                        </button>
                    </div>
                </div>


            </div>

            

            <div className="mobile-header-container__content-box" >

                    <div className="mobile-header-container__content-box__title-box">
                        <h1 className="mobile-header-container__content-box__title-box--title">Modern </h1>
                        <h1 className="mobile-header-container__content-box__title-box--title">Art Gall<span className="mobile-header-container__content-box__title-box--title--spec-text">ery</span></h1>
                    </div>

                    <div className="mobile-header-container__content-box__subtext-location-btn" >
                        <p className="mobile-header-container__content-box__subtext-location-btn--subtext">The arts in the collection of the Modern Art Gallery all started from a spark of inspration. WIll these pieces inspire you? Visit us and find out</p>

                        <button className="mobile-header-container__content-box__subtext-location-btn--btn">

                            <p className="mobile-header-container__content-box__subtext-location-btn--btn__text">Our Location</p>

                            <div className="mobile-header-container__content-box__subtext-location-btn--btn__icon-box">
                                <img alt='arrow icon' className="mobile-header-container__content-box__subtext-location-btn--btn__icon-box--icon" src={arrow} />
                            </div>

                        </button>
                    </div>
                </div>

        </>

    )
}