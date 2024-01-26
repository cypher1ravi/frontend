import { useEffect, useState } from 'react';
import React from 'react'
import Typed from 'typed.js';
import cv from '../images/myCv.pdf'
import profile1 from '../images/profile-avatar.jpg'
import profile2 from '../images/profile-avatar1.jpg'
import profile3 from '../images/profile-avatar2.jpg'

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const typed = new Typed('.typing-2', {
            strings: ['Designer', 'Developer', 'Freelancer'],
            typeSpeed: 90,
            backSpeed: 50,
            loop: true,
            showCursor: true,
            onStringTyped: (arrayPos) => {
                setCurrentIndex(arrayPos % 3);
            },
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const profileImages = [profile1, profile2, profile3];

    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left" id="imageCarousel">
                        <img src={profileImages[currentIndex]} alt="profilImage" />

                    </div>
                    <div className="column right">
                        <div className="text">I'm Ravindra and I'm a <span className="typing-2"></span></div>
                        <p>
                            I'm a passionate web developer fueled by creativity and technology.
                            With a Master's degree in Computer Science (2023) and a Bachelor's degree (2021), I've honed my
                            skills to craft immersive digital experiences. From concept to code, I specialize in
                            transforming ideas into dynamic web solutions.

                            Beyond my coding journey, I'm an avid technology enthusiast, always eager to explore the latest
                            advancements. When I'm not immersed in lines of code, you can catch me on the cricket field,
                            strategizing and enjoying the thrill of the game.

                            I believe that every line of code tells a story, and I'm dedicated to crafting narratives that
                            engage users and solve problems. Whether it's responsive design, seamless functionality, or
                            innovative user interfaces, I'm committed to delivering quality in every project.</p>
                        <a href={cv} download="Cv">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
