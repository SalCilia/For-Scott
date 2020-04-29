import React, { useState } from 'react';

function Button(props) {

    const handleClick = () => {
        props.handleClick()
    }
    return (
        <>
            <button onClick={() => handleClick()} className={'btn-primary'}>Another one</button>
        </>
    )
}
export default Button