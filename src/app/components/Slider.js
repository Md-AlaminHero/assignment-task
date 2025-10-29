import React from 'react'

export default function Slider() {
    return (
        <div className="w-full flex bg-gray-100 overflow-hidden gap-3">
            {/* Left: Slider (2/3 width) */}
            <div className="w-2/3 relative">
                <div className="carousel w-full h-full">
                    <div id="slide1" className="carousel-item relative w-full h-full">
                        <img
                            src="https://picsum.photos/id/1018/1200/600"
                            alt="Slide 1"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full h-full">
                        <img
                            src="https://picsum.photos/id/1020/1200/600"
                            alt="Slide 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full h-full">
                        <img
                            src="https://picsum.photos/id/1038/1200/600"
                            alt="Slide 3"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Two stacked images (1/3 width) */}
            <div className="w-1/3 flex flex-col gap-3">
                <div className="flex-1">
                    <img
                        src="https://picsum.photos/id/1041/800/300"
                        alt="Top"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1">
                    <img
                        src="https://picsum.photos/id/1043/800/300"
                        alt="Bottom"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
