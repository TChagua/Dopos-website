import React from 'react';
import Button from '../Components/Button'
const Section1 = () => {
    const name = "Learn More";
    const icon = <i className="fas fa-angle-right"></i>
    return(
        <div className="section1">
            <div className="flex1 flex">
                <h2 className="subtitle1">Creative Design & Advertising</h2>
                <p className="section1-par"><i class="far fa-chart-bar fa-2x"></i>  Proin pharetra volutpay est dictim. 
                Cras pharetra molestie et laoreet
                torot accumsan quis</p>
                <Button name={name} icon={icon}/>
            </div>
            <div className="flex2">
                <img src="images/main.jpg" alt="main"/>
            </div>
        </div>
    )
}

export default Section1