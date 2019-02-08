import React from 'react';
import Button from '../Components/Button'
const Section3 = () => {
    const name = "Case Study";
    return(
        <div className="section3">
            <div className="upper-container flex">
                <p className="title">Featured</p>
                <h2 className="subtitle3">Making Ideas Come to Life.</h2>
                <span>01/<sup>09</sup></span>
            </div>
            <div className="panorama-container">
                <img src="images/panorama.jpg" alt="panorama"/>
            </div>
            <div className="down-container">
                <div className="down-container-left flex">
                    <p>
                        Curabitur nisi nisi, varius ac lectus sed,
                        eleifend ultrices nibh nam sit amet eros mauris.
                        Cras non ligula sed metus aliquet mollis nec sed tellus.
                    </p>
                    <Button name={name}/>
                </div>
                <div className="down-container-right">
                    <div>
                        <p className="first-par">Category</p>
                        <p className="second-par">Design & Branding</p>
                        <hr/>
                    </div>
                    <div>
                        <p className="first-par">Client</p>
                        <p className="second-par">Cusco Barista</p>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="slogan-container">
                <img src="images/slogan.png" alt="clients"/>
            </div>
        </div>
    )
}

export default Section3