import React, { useEffect, useRef } from "react";
import gsap, { ScrollTrigger, Power4 } from "gsap/all";

function PlayReel() {
    const parent = useRef(null);
    const videodiv = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(videodiv.current, {
            scrollTrigger: {
                trigger: parent.current,
                top: "0 0",
                pin: true,
                scrub: 1,
            },
            width: "115%",
            height: "115%",
            ease: Power4
        });
    });
    return (
        <div ref={parent} className="w-full h-screen overflow-hidden relative bg-black">
            <div ref={videodiv} className="w-40 sm:w-96 overflow-hidden aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
                <video muted autoPlay loop className="w-full h-full scale-[2.5] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://download-video.akamaized.net/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1728390362~exp=1728404762~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=445e0148a72edae7d336926ca8bcb1d73810184683bf2f06f4790cfbcf475fd9&r=dXMtY2VudHJhbDE%3D" type="video/mp4"></video>
            </div>
            <div className="overlay absolute w-full h-full text-white flex flex-col justify-between py-20">
                <div className="w-full flex items-center justify-center gap-3 sm:text-2xl">
                    <svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                    <h3 >Work in motion</h3>
                </div>
                <h1 className="w-full justify-center items-center gap-20 sm:gap-60 flex">
                    <div className="text-6xl sm:text-9xl font-light">Play</div>
                    <div className="text-6xl sm:text-9xl font-light">Reel</div>
                </h1>
                <p className="text-center px-10 text-md">Our work is bes experienced in motion. Dont't forget to put on your headphones.</p>
            </div>

        </div>
    )
}

export default PlayReel;