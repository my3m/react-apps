import React from 'react'

const ImageList = (props) => {

    const images = props.images.map(image => ( 
        <div class="item"> 
            <img src={image.urls.regular} alt={image.alt_description} /> 
        </div>
    ));

    return <div className="ui list">{images}</div>;
}

export default ImageList;