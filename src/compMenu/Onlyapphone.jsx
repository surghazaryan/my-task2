import React from 'react'
import { useMemo } from 'react'
import video from "./video/videoApple.mp4"


export default function Onlyapphone() {
  const text = useMemo(() => {
    return `Discover all the experiences you could ask for on the devices you love. Award-winning shows and movies, amazing music in spatial audio and superfun games. It’s the most visionary, relevant, high-quality content you’ll find. And it’s only on Apple.`
  }, []);

  return (
    <div>
      <div className="title-Onlyapphone">
        <h1>The best experiences.</h1>
        <h1>Only on Apple.</h1>
        <p>{text}</p>
      </div>
      <video src={video} autoPlay loop muted className='video' />
    </div>
  )
}
