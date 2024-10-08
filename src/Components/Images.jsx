import React, { useEffect, useRef } from "react";
import gsap, { ScrollTrigger, Power4 } from "gsap/all";
import { easeInOut } from "framer-motion";

function Images() {
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const fourth = useRef(null);


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                start: "0 90",
                scrub: 1
            }
        });
        tl
            .to(first.current, {
                x: "50%",
                ease: easeInOut
            }, 'a')
            .to(second.current, {
                x: "-75%",
                ease: easeInOut
            }, 'a')
            .to(third.current, {
                x: "-50%",
                ease: easeInOut
            }, 'a')
            .to(fourth.current, {
                x: "50%",
                ease: easeInOut
            }, 'a')
    })
    return (
        <div className="w-full h-[70vh] sm:h-[100vw]  bg-white flex items-center justify-center overflow-hidden">
            <div className="w-[40%] h-1/2 relative">
                <div ref={first} className="absolute w-20 sm:w-[20rem] sm:h-[20rem] h-[7rem] -right-1/3 top-6">
                    <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" /></div>
                <div ref={second} className="absolute w-[8rem] sm:w-[24rem] sm:h-[20rem] aspect-video -left-1/2 top-1/3 sm:-left-1/4 sm:top-[6%]">
                    <video autoPlay loop muted className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://download-video.akamaized.net/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1728390362~exp=1728404762~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=445e0148a72edae7d336926ca8bcb1d73810184683bf2f06f4790cfbcf475fd9&r=dXMtY2VudHJhbDE%3D" type="video.mp4"></video></div>
                <div ref={third} className="absolute w-[9rem] sm:w-[20rem] sm:h-[25rem] aspect-video -left-[70%] sm:-left-[40%] -bottom-10 sm:-bottom-[30%]">
                    <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" />
                </div>
                <div ref={fourth} className="absolute w-[10rem] sm:w-[25em] sm:h-[30rem] aspect-[1.5/1] -right-[50%] sm:-right-[40%] -bottom-[30%] overflow-hidden">
                    <video autoPlay loop muted className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://download-video.akamaized.net/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1728390362~exp=1728404762~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=445e0148a72edae7d336926ca8bcb1d73810184683bf2f06f4790cfbcf475fd9&r=dXMtY2VudHJhbDE%3D" type="video.mp4"></video></div>
                <img className="w-full h-full object-cover sm:h-[70vw]" src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" />
            </div>
        </div>
    )
}

export default Images;