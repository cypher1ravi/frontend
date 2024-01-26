//
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import weather from '../images/weather.png'
import blogging from '../images/blogging.png'
import newsfiesta from '../images/newsfiesta.png'
import resumeBuilder from '../images/resume-builder.png'
const Project = () => {
    const projects = [
        {
            id: 1,
            link: 'https://resumebuilder2.vercel.app/#/',
            imageSrc: resumeBuilder,
            alt: 'Resume builder',
            text: 'Resume builder',
        },
        {
            id: 2,
            link: 'https://cypher1ravi.github.io/newsfiesta/',
            imageSrc: newsfiesta,
            alt: 'News fiesta',
            text: 'News fiesta',
        },
        {
            id: 3,
            link: 'https://cypher1ravi.github.io/Tutes4u/',
            imageSrc: blogging,
            alt: 'Blogging website',
            text: 'Blogging website',
        },
        {
            id: 4,
            link: 'https://cypher1ravi.github.io/weather/',
            imageSrc: weather,
            alt: 'Weather website',
            text: 'Weather website',
        },


    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                <Carousel responsive={responsive}
                    autoPlay
                    autoPlaySpeed={3000}
                    infinite
                    className='carousel'>
                    {projects.map(project => (
                        <div key={project.id} className="card">
                            <div className="box">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img src={project.imageSrc} alt={project.alt} />
                                </a>
                                <div className="text">{project.text}</div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Project;
