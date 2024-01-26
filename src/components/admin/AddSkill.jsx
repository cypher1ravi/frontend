import React, { useState } from 'react';
const formRef = React.createRef();


export default function AddSkill() {
    const [skillname, setSkillName] = useState('');
    const [proficiency, setProficiency] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch('/api/addSkill', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ skillname, proficiency }),
            })

            if (response.ok) {
                alert('Skill added successfully');
                formRef.current.reset();

            } else {
                console.error('Error adding skill:', await response.text());
                alert('Error adding skill:', await response.text());

            }
        } catch (error) {
            console.error('Error adding skill:', error);
            alert('Internal Server Error')

        }
    };

    return (
        <div className='login'>
            <div className='admin-container'>
                <div className="text"><h2>Add skill</h2></div>
                <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
                    <label htmlFor="name">Skill Name:</label>
                    <input
                        type="text"
                        id="skillName"
                        name="skillName"
                        required
                        value={skillname}
                        onChange={(e) => setSkillName(e.target.value)}
                    />

                    <label htmlFor="proficiency">Skill Proficiency:</label>
                    <input
                        type="text"
                        id="proficiency"
                        name="proficiency"
                        required
                        value={proficiency}
                        onChange={(e) => setProficiency(e.target.value)}
                    />

                    <button type="submit">Add Skill</button>
                </form>
            </div>
        </div>
    );
}
