import React from 'react';
import Button from '../Components/Button'
const Section4 = () => {
    const name = "Subscribe";
    const name2= "All Articles";
    const icon = <i className="fas fa-angle-right"></i>
    return(
        <div className="section4">
            <div className="first">
            <p className="title">Insights</p>
            <h2 className="subtitle4">Latest Blog Posts</h2>
            <hr/>
            <h5>Subscribe to receive free email updates</h5>
            <small>Quisque ut quis sagittis</small><br/>
            <input type="text" placeholder="Enter your email"/>
            <Button name={name} icon={icon}/>
            </div>
            <div className="second">
                <p className="number">01.</p>
                <h4>While Others Talk We Listen.</h4>
                <p className="date">oct. 16, 2018</p>
                <p className="text">Praesent aliquet posuere ex, a pellentesque neque facilisis et. 
                    Nulla eget mollis enim, in blandit dolor. 
                    Aliquam consequat nunc elit, non varius sem facilisis non. 
                    In ut augue eget justo porttitor venenatis. 
                    Pellentesque euismod id dolor sit amet vehicula. 
                    Vivamus pharetra libero ante, quis pharetra ligula ultrices vel. 
                    Morbi pharetra eleifend tortor vitae accumsan. 
                    Morbi faucibus sapien vitae eros commodo ornare.
                </p>
                <hr/>
                <a href="#">Read Full Article <i className="fas fa-angle-right"></i></a>
            </div>
            <div className="third">
            <i className="fas fa-angle-right fa-4x arrow"></i><br/>
            <i className="fas fa-angle-left fa-4x arrow"></i><br/>
            <Button name={name2} icon={icon}/>
            </div>
        </div>
    )
}

export default Section4