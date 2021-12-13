import React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Carousel = ({ item }) => {
    return (
        <div className="carousel-container">
            <div className="carousel-inner">
                <div className="thumbnail-container">
                    {
                        item.photoUrl.map(photo => (
                            <div className="item-thumbnail" key={photo.id} >
                                <img src={photo.url} alt={item.title} />
                            </div>
                        ))
                    }
                </div>
                {/* {
                    item.photoUrl.map(photo => (
                        <div className="carousel-item fade">
                            <img className="item-image" src={`${photo.url}`} />
                        </div>
                    ))
                } */}
                <img className="item-image" src={item.photoUrl[0].url} />
                <button className="left-carousel-button"><IoChevronBack /></button>
                <button className="right-carousel-button"><IoChevronForward /></button>
            </div>
            
        </div>
    )
}

export default Carousel;