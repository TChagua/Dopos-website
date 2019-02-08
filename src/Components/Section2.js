import React from 'react';
import Button from '../Components/Button'
const Section2 = () => {
    const name = "Learn More";
    return(
        <div className="section2">
            <div className="text-container flex">
                <p className="title">Studio</p>
                <h2 className="subtitle2">Design Solutions For Every Media.</h2>
                <hr/>
                <p className="section2-par"> Suspendisse eget est at bendum
                    dui elit, aliquam vel lacus a felis.
                </p>
                <Button name={name}/>
            </div>
            <div className="img-container">
                <img src="images/2.jpg" alt=""/>
                <img src="images/4.jpg" alt=""/>
                <img src="images/3.jpg" alt=""/>
                <img src="images/1.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Section2