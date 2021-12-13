import React from 'react';

const CarouselItem = ({ photo }) => (
    <div className="carousel-item fade">
        <img className='item-image' src={`${photo.url}`} />
    </div>
);

export default CarouselItem;