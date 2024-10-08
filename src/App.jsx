import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import PlayReel from "./Components/PlayReel";
import Images from "./Components/Images";
import Spread from "./Components/Spread";
import Ourstory from "./Components/Ourstory";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full '>
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
      <Ourstory />
    </div>
  )
}

export default App;
