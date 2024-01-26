import React from 'react';
import '../../style.css';

export default function AdminPage() {
    return (
        <div>
            <nav className="navbar sticky">
                <div className="max-width">
                    <div className="logo"><a href='#/'>Portfolio.</a></div>
                    <ul className="menu">
                        <li><a href='/'>Logout</a></li>
                    </ul>
                </div>
            </nav>

            <div className='login'>
                <div className='admin-container'>
                    <div className="text"><h2>Add project</h2></div><br />
                    <form action="/api/addProject" method="post" encType="multipart/form-data">
                        <label htmlFor="image">Project Image:</label>
                        <input type="file" accept="image/*" id="image" name="image" required onChange={(e) => console.log(e.target.files[0])} />

                        <label htmlFor="link">Project Link:</label>
                        <input type="text" id="link" name="link" required />

                        <label htmlFor="description">Project Description:</label>
                        <textarea id="description" name="description" required></textarea>

                        <button type="submit">Add Project</button>
                    </form>

                    <div className="text"><h2>Add skill</h2></div>
                    <form action="/api/addSkill" method="post">
                        <label htmlFor="name">Skill Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="proficiency">Skill Proficiency:</label>
                        <input type="text" id="proficiency" name="proficiency" required />

                        <button type="submit">Add Skill</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
