import React from 'react'

export default function Skill() {
    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My creative skills & experiences.</div>
                        <p>I am a skilled frontend developer with expertise in HTML, CSS, JavaScript, and ReactJS. These
                            form the foundation of my ability to create structured user interfaces. My JavaScript
                            proficiency allows me to add dynamic elements, while ReactJS lets me build scalable applications
                            with reusable components and optimized performance. I expedite development using frameworks like
                            Bootstrap and Tailwind CSS, ensuring consistency across devices. jQuery enhances user
                            interactions through seamless DOM manipulation.

                            While I focus on frontend, I possess foundational MySQL knowledge, aiding collaboration with
                            backend developers for holistic system integration. Object-oriented programming principles
                            elevate my coding, resulting in clean, modular structures.

                            In summary, I offer a wide range of frontend tools. Proficient in HTML, CSS, JavaScript, and
                            ReactJS, I craft immersive digital experiences that blend aesthetics with functionality. My
                            commitment to staying current positions me to deliver innovative solutions that captivate users
                            and exceed expectations.</p>
                        <a href="https://www.linkedin.com/in/ravindrachaubey" target="_blank" rel="noreferrer">Know more</a>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>80%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Bootstrap</span>
                                <span>80%</span>
                            </div>
                            <div className="line bootstrap"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript</span>
                                <span>90%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>ReactJs</span>
                                <span>50%</span>
                            </div>
                            <div className="line react"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
