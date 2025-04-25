'use client';

export default function VideoBackground() {
  return (
    <video 
          autoPlay 
          muted
          playsInline={true} 
          loop 
          preload="auto" 
          className="absolute z-0 top-0 w-full h-full object-cover object-center brightness-50"
        >
          <source src="/barbeariaVideo.mp4" type="video/mp4" />   
          <div className="vsc-controller hidden"/> 
        </video>
  );
}