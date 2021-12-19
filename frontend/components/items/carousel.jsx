import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Carousel = ({ item }) => {
    const [images, setImages] = useState(Array.from(item.photoUrl));
    const [currImg, setCurrImg] = useState(images[0]);

    const handleThumbnailClick = (idx) => {
        setCurrImg(item.photoUrl[idx]);
    };

    const handleLeftClick = () => {
        let leftCurrentImg = images.pop();
        images.unshift(leftCurrentImg);
        setCurrImg(images[0]);
    };

    const handleRightClick = () => {
        let rightCurrentImg = images.shift();
        images.push(rightCurrentImg);
        setCurrImg(images[0]);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-inner">
                <div className="thumbnail-container">
                    {
                        item.photoUrl.map((photo, idx) => (
                            <div className="item-thumbnail" key={photo.id} onClick={() => handleThumbnailClick(idx)} >
                                <img src={photo.url} alt={item.title} />
                            </div>
                        ))
                    }
                </div>
                {/* {
                    images.map((photo, idx) => (
                        <div className="carousel-item fade">
                            <img className="item-image" src={`${photo.url}`} alt={photo.filename} />
                        </div>
                    ))
                } */}
                <img className="item-image" src={currImg.url} alt={currImg.filename} />
                { item.photoUrl.length > 1 ? 
                <div><button className="left-carousel-button" onClick={handleLeftClick}><IoChevronBack /></button>
                <button className="right-carousel-button" onClick={handleRightClick}><IoChevronForward /></button></div>
                : null }
            </div>
            
        </div>
    )
}

export default Carousel;