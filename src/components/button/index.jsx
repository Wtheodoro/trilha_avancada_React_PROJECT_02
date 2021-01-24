import React from 'react'

function Button(props) {
    
    return (
        <>
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {props.name}
        </a>
        </>
    )
}

export default Button