import React, { useState } from 'react';


function ImageCarousel(props) {
    const style = {
        width: "125px",
        height: "150px",
    }
    return (
        <>
            {props.dogs.map(dog => {
                return <div className={'col'}style={{width: "130px"}} ><img src={dog} style={style} className="image-fluid" /> </div>
            })}

        </>
    )

}
export default ImageCarousel