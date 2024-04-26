import React from 'react';
import './Home.css';
import video from './workvideo copy.mp4';

function Home() {
    return (
        <>
            <video id="video-bg" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="content">
                <h1>We are Wesupp</h1>
            </div>
        </>
    );
}

export default Home;
