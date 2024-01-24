import React from 'react'

export default function Project() {
    return (
        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                <div className=" serv-content">
                    <div className="card">
                        <div className="box">
                            <a href="https://cypher1ravi.github.io/weather/" target="_blank" rel="noreferrer">
                                <img src="images/weather.png" alt="3" /></a>
                            <div className="text">Weather website </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box"> <a href="https://cypher1ravi.github.io/Tutes4u/" target="_blank" rel="noreferrer">
                            <img src="images/blogging.png" alt="2" /></a>
                            <div className="text">Blogging website</div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="box"> <a href="https://cypher1ravi.github.io/newsfiesta/" target="_blank" rel="noreferrer">
                            <img src="/images/newsfiesta.png" alt="1" /></a>
                            <div className="text">News fiesta </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <a href="https://resumebuilder2.vercel.app/#/" target="_blank" rel="noreferrer">
                                <img src="images/resume-builder.png" alt="Resume builder" />
                            </a>
                            <div className="text">Resume builder </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">Web Apps </div>
                            <p>"Crafting exceptional app experiences through innovative design. Elevate your brand with
                                captivating user interfaces."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
