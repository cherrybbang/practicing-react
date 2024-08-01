import '../styles/slider.css';
import { useState, useEffect } from 'react';

function ImgSlider({image, intervalTime}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1)% image.length);
        }, intervalTime);

        return() => clearInterval(interval);
    }, [currentIndex,image.length, intervalTime]);

    return (
        <>
         <h1 style= {{ textAlign: "center" }}>3초마다 이미지 슬라이드</h1>

         <div className='slide_wrap'>
            <div className='slide_group'>
                <img src={image[currentIndex]} alt='짱구이미지'></img>
            </div>
         </div>
        </>
    )
}

export default ImgSlider;

// 리액트 클래스는 기본 html 안에 적는다면, className ='hi'
// import하여 변수로 적는다면, className = { Hello }
// className = { `hi ${Hello}` } 식으로 기본 + 변수 조합으로도 가능하다.

// useState & useEffect 사용하여 상태관리
// currentIndex : 현재 슬라이드 인덱스
// setCurrentIndex 함수를 통해 슬라이드 인덱스 갱신

// ImgSlider()을 사용하려면 images, intervalTime을 props로 전달해주면 된다.