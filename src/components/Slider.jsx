import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Slider = ({slides})=> {
    const [currentIndex, setCurentIndex]= useState(0);
    const sliderStyles={
        height: "100%",
        position: "relative",
    }
    const slideStyles={
        width:"100%",
        height:"100%",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage: `url(${slides[currentIndex].src})`
    }

    const leftArrowStyles ={
        position: "absolute",
        top:"50%",
        Transform: "translate(0,-50%)",
        left:'32px',
        fontSize:"40px",
        color:"#f0dcae",
        zIndex:1,
        cursor:"pointer",
        rotate: "180deg",
    }
    const rightArrowStyles ={
        position: "absolute",
        top:"50%",
        Transform: "translate(0,-50%)",
        right:'32px',
        fontSize:"40px",
        color:"#f0dcae",
        zIndex:1,
        cursor:"pointer",
    }

    const dotStyles={
        margin:"0 10px",
        cursor: "pointer",
        fontSize: "20px",
        color:"#f0dcae",
    }

    const prev = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide? slides.length-1 : currentIndex-1;
        setCurentIndex(newIndex);
    }
    const next = ()=>{
        const isLastSlide = currentIndex === slides.length-1
        const newIndex = isLastSlide? 0 : currentIndex+  1;
        setCurentIndex(newIndex);
    }
    const goToSlide = slideIndex => {
        setCurentIndex(slideIndex);
    } 


    return (
        <div style={sliderStyles}>
            <div className='leftArrowStyles' style={leftArrowStyles} onClick={prev}> <FontAwesomeIcon icon="circle-arrow-right"/> </div>
            <div className='rightArrowStyles' style={rightArrowStyles} onClick={next}> <FontAwesomeIcon icon="circle-arrow-right"/> </div>
            <div style={slideStyles} className="slideStyles">
                <div className='slides__info'>
                <h1 className='slides__title'>{slides[currentIndex].title} </h1>
                <p className='slides__para'>{slides[currentIndex].para}</p>
                <a href="#featured">
                <button className='slides__but'>{slides[currentIndex].but}</button>
                </a>
                </div>
            <div className='dotsContainerStyles' >{slides.map((slide, slideIndex) =>
            <div className='dotStyles' key={slideIndex} style={dotStyles} onClick={() =>goToSlide(slideIndex)}> <FontAwesomeIcon icon ="circle"/> </div>
            )}</div>
            </div>
        </div>
    );
}

export default Slider;