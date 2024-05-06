import { useState, useEffect } from 'react';
import SectionBreak from './SectionBreak';

import logo from './Pictures/BiggerLogo.svg';
import Button from './Button';
const VideoSection = (props) => {
    const { videos, isHero } = props;
    const intervalDuration = 3000; // Interval duration in milliseconds
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    
    useEffect(() => {
        // Function to shuffle between videos
        const shuffleVideos = () => {
          setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
        };
      
        // Set interval to shuffle videos every x seconds
        const intervalId = setInterval(shuffleVideos, intervalDuration);
      
        // Clear interval on component unmount
        return () => clearInterval(intervalId);
      }, [videos, currentVideoIndex]); // Add currentVideoIndex here
      
      return (
    <section className='overflow-hidden relative w-full h-[85vh]'>
        <div className='w-full h-full overflow-hidden -z-1 relative'>
            <video
                key={currentVideoIndex}
                autoPlay
                loop
                muted
                playsInline
                className="absolute object-cover z-[1] overflow-hidden w-full h-full"
            >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
            </video>
        </div>
        {
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}} className="w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center text-center">
              {isHero && (
              <div className='flex flex-col justify-center items-center'>
                <img src={logo} className="relative w-[50px] h-[50px] md:w-[75px] md:h-[75px] pulse bottom-4"></img>
                <h1 className="z-10 text-white font-Poppins font-[800] tracking-[0.2em] text-[2em] md:text-[4em] mb-[1vh] textGlow">WAFORGE</h1>
                <h1 className="z-10 text-white font-Poppins font-[200] tracking-[0.2em] text-[1.5em] mt-3 md:text-[2em] textGlow">Innovate Create Learn</h1>
                <Button action = "this.scrollToSection" text = "Get Started" paddingx = {" px-[6rem]"} paddingy = " py-[1rem]" extraStyle="mt-[6vh]"/>
              </div>
              )}
            </div>
        }
    </section>
);
      
}
 
export default VideoSection;