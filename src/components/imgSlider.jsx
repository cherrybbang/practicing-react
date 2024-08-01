import '../styles/slider.css';
import { useState, useEffect } from 'react';

function ImgSlider({images, intervalTime}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1)% images.length);
        }, intervalTime);

        return() => clearInterval(interval);
    }, [currentIndex,images.length, intervalTime]);

    return (
        <>
         <h1 style= {{ textAlign: "center" }}>3초마다 이미지 슬라이드</h1>

         <div className='slide_wrap'>
            <div className='slide_group'>
                <img src={images[currentIndex]} alt='짱구이미지'></img>
            </div>
         </div>
        </>
    )
}

export default ImgSlider;