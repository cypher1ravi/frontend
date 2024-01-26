import React, { useState } from 'react';

export default function AddProject() {
    const [imageLink, setImageLink] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch('/api/addProject', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imageLink, link, description }),
            })
            if (response.ok) {
                alert('Project added successfully');
            } else {
                alert('Error adding project:', await response.text());
            }
        } catch (error) {
            console.error('Error adding project:', error);
            alert('Internal server Error ')
        }
    };

    return (
        <div className='login'>
            <div className='admin-container'>
                <div className="text"><h2>Add project</h2></div><br />
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <label htmlFor="imageLink">Project Image Link:</label>
                    <input type="text" id="imageLink" name="imageLink" required value={imageLink} onChange={(e) => setImageLink(e.target.value)} />

                    <label htmlFor="link">Project Link:</label>
                    <input type="text" id="link" name="link" required value={link} onChange={(e) => setLink(e.target.value)} />

                    <label htmlFor="description">Project Description:</label>
                    <textarea id="description" name="description" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                    <button type="submit">Add Project</button>
                </form>
            </div>
        </div >
    );
}
