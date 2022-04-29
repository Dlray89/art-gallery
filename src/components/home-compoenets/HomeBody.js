import React from "react"; 
import imgOne from '../../assets/desktop/image-grid-1.jpg'
import imgTwo from '../../assets/desktop/image-grid-2.jpg'
import imgThree from '../../assets/desktop/image-grid-3.jpg'



export const HomeBody = () => {

    return (
        <div className="body-container">
            <div className="body-container__sub-container-one">
                <div className="body-container__sub-container-one__title-box">
                    <h2 className="body-container__sub-container-one__title-box--title">Your Day at the gallery</h2>
                    <p className="body-container__sub-container-one__title-box--subtext">Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process</p>
                </div>

                <div className="body-container__sub-container-one__img-box">
                    <img className="body-container__sub-container-one__img-box--img" src={imgOne} />
                </div>
            </div>



            <div className="body-container__sub-container-two">
                <div className="body-container__sub-container-two__img-box">
                    <img className="body-container__sub-container-two__img-box--img" src={imgTwo} />
                </div>

                <div className="body-container__sub-container-two__img-and-text">

                    <div className="body-container__sub-container-two__img-and-text__img-box">
                        <img className="body-container__sub-container-two__img-and-text__img-box--img" src={imgThree} />
                    </div>

                    <div className="body-container__sub-container-two__img-and-text__title-box">
                        <h3 className="body-container__sub-container-two__img-and-text__title-box--title">
                            Come & be inspired
                        </h3>
                        <p className="body-container__sub-container-two__img-and-text__title-box--subtext">
                            We're excited to welcome you to our gallery and see how our collections influence you.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}