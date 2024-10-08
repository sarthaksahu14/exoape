import React from "react";

function Ourstory() {
    return (
        <div className="w-full h-screen bg-[#070707] text-[#E0CCBB] mt-10">
            <div className="w-full h-[50vw] sm:flex items-center justify-center">
                <div className="w-full sm:w-1/3 sm:ml-32 pt-[10rem] p-5 sm:p-0">
                    <h1 className="sm:w-1/2 text-center text-5xl sm:text-[10rem] leading-none">Our Story</h1>
                    <p className="text-center mt-10 sm:mr-10 sm:text-3xl ">The Story behind Exo Ape is one of exploration, creativity and curosity.</p>
                </div>
                <div className="mt-16 sm:mt-0 sm:ml-20">
                    <ul className="ml-32">
                        <li className="mt-1">Willem || Singel 8</li>
                        <li className="mt-1">6041 HS, Roermond</li>
                        <li className="mt-1">The Netherlands</li>
                        <li className="mt-1">hello@exoape.com</li>
                    </ul>
                </div>
                <div className="flex">
                    <ul className="mt-16 sm:mt-0 ml-20 sm:ml-32">
                        <li className="mt-1">Work</li>
                        <li className="mt-1">Studio</li>
                        <li className="mt-1">News</li>
                        <li className="mt-1">Contact</li>
                    </ul>
                    <ul className="mt-16 sm:mt-0 ml-24 sm:ml-32">
                        <li className="mt-1">Behnace</li>
                        <li className="mt-1">Dribble</li>
                        <li className="mt-1">Twitter</li>
                        <li className="mt-1">Instagram</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Ourstory;