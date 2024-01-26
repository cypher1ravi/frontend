import React, { useState, useEffect } from 'react';

const AdminHome = () => {
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchSkillsAndProjects = async () => {
            try {
                // Fetch skills
                const skillsResponse = await fetch('/api/getSkills');
                const skillsData = await skillsResponse.json();
                setSkills(skillsData.skills);

                // Fetch projects
                const projectsResponse = await fetch('/api/getProjects');
                const projectsData = await projectsResponse.json();
                setProjects(projectsData.projects);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSkillsAndProjects();
    }, []);

    return (
        <div className='login'>
            <div className='admin-container'>
                <h2>Skills</h2>
                <ol>
                    {skills.map(skill => (
                        <li key={skill._id}>{skill.name}</li>
                    ))}
                </ol>

                <h2>Projects</h2>
                <ol>
                    {projects.map(project => (
                        <li key={project._id}>
                            <strong>{project.description}</strong>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default AdminHome;
