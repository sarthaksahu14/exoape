import React from "react";
import { motion } from "framer-motion";

function Work() {
    return (

        <div className="w-full relative ">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-20 py-20 ">
                <div className="featured flex gap-3">
                    <svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 sm:ml-20"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                    <h3 className="capitalize ">featured projects</h3>
                </div>
                <h1 className="text-9xl my-7 sm:ml-20"><motion.span initial={{ rotate: 90, y: "40%", opacity: 0 }}
                    whileInView={{ rotate: 0, y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: [0.22, 1, 0.36, 1],
                        duration: 0.8,
                    }} className="inline-block origin-left">Work</motion.span>
                </h1>
                <div className="elems mt-20">
                    <div className="elem w-full sm:flex">
                        <div className="video w-full h-[100vw] sm:h-[50vw] relative overflow-hidden sm:ml-20 overflow-hidden">
                            <motion.img initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} data-scroll data-scroll-speed="-.5" className="hidden sm:inline-block w-full h-full sm:w-[35rem] object-cover" src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/900x1121/filters:quality(90)" alt="" />
                            <video autoPlay muted loop className="block sm:hidden w-full h-full  scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a" type="video/mp4"></video>
                            <p className="leading-2 text-xl sm:mt-20">Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
                        </div>
                        <div className="mt-12 sm:mr-20 overflow-hidden">
                            <p className="leading-2 text-md sm:text-xl sm:mt-20 sm:w-[22rem] ">Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
                            <motion.img initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} data-scroll data-scroll-speed="-.5" className="hidden sm:inline-block w-full h-full object-cover sm:h-[35vw] sm:w-[22rem] sm:mt-40" src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)" alt="" />
                        </div>

                    </div>

                </div>
                <div className="elems">
                    <div className="elem w-full sm:flex">
                        <div className="video w-full h-[100vw] sm:h-[80vw] sm:w-[22rem] relative overflow-hidden sm:ml-20 overflow-hidden">
                            <p className="leading-2 text-xl sm:mt-20 sm:w-[38rem] mt-[10rem] sm:block">Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
                            <motion.img initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} data-scroll data-scroll-speed="-.5" className="hidden sm:inline-block w-full h-full sm:w-[35rem] hidden sm:h-[35vw] object-cover sm:mt-20" src="https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)" alt="" />
                            <video autoPlay muted loop className="block sm:hidden w-full h-full scale-[1.3] absolute mt-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a" type="video/mp4"></video>

                        </div>
                        <div className=" ml-[18rem] overflow-hidden">
                            <motion.img initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} data-scroll data-scroll-speed="-.5" className="hidden sm:inline-block w-full h-full object-cover sm:w-[35rem] sm:h-[70vw] sm:mt-40" src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)" alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work;