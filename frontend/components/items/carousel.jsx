import React, { useState } from 'react';
import CarouselItem from './carousel_item';

const Carousel = ({ item }) => {
    const [currentIdx, setCurrentIdx] = useState(0);

    const updateIdx = newIdx => {
        if (newIdx < 0) {
            newIdx = 0;
        } else if (newIdx >= item.photoUrl.length) {
            newIdx = item.photoUrl.length - 1;
        }

        setCurrentIdx(newIdx);
    }

    return (
        <div className='carousel-container'>
            <div className='carousel-inner'>
                {
                    item.photoUrl.map((photo, idx) => (
                        <CarouselItem key={idx} photo={photo} />
                    ))
                }

            </div>
        </div>
    )
}

export default Carousel;