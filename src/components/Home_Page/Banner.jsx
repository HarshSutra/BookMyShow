import React from 'react'
import "./Home.css";

const Banner = () => {
    return (
        <div>
            <div className="mySlides">
                <img
                    src="https://image.tmdb.org/t/p/original/gMJngTNfaqCSCqGD4y8lVMZXKDn.jpg"
                    className="hero-img"
                />
                <div className="text">Ant-Man and the Wasp: Quantumania</div>
            </div>
        </div>
    )
}

export default Banner
