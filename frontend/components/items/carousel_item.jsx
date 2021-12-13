import React from 'react';

const CarouselItem = ({ photo }) => (
    <div>
        <img className='carousel-item' key={idx} src={`${photo.url}`} />
    </div>
);

export default CarouselItem;