import React from 'react';

const Button = (props) => {
    const style= {
        padding:"15px 30px",
        color: "rgba(46, 53, 46, 0.733)",
        border: "2px solid coral",
        borderRadius: "30px",
        background:"white",
        textTransform: "uppercase",
        fontFamily: 'Fira Sans Condensed',
        cursor: 'pointer'
    }
    return(
        <button style={style}>{props.name}{props.icon}</button>
    )
}

export default Button