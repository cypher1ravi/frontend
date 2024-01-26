import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secretKey, setSecretKey] = useState('')
    console.log(username, password);
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, secretKey }),
            });
            const result = await response.json();
            if (response.ok) {
                alert(`${result.message}`);
                navigate(`/${result.route}`)

            } else {
                alert(`Error during registration: ${result.message}`);
                // Handle error, show a message, etc.
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Network error or Internal Server Error');
            // Handle error, show a message, etc.
        }
    };

    return (
        <div>
            <nav className="navbar sticky">
                <div className="max-width">
                    <div className="logo"><a href='#/'>Portfolio.</a></div>
                    <ul className="menu">
                        <li> <a href='/' className="menu-btn">Home</a></li>
                    </ul>
                </div>
            </nav>
            <div className="login">
                <div className="column right login-container">
                    <h2>SignUp</h2>
                    <br />
                    <form onSubmit={handleSignup}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        /><br />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        /><br />
                        <label htmlFor="secretKey">Secret Key:</label>
                        <input
                            type="password"
                            id="secretKey"
                            name="secretKey"
                            value={secretKey}
                            onChange={(e) => setSecretKey(e.target.value)}
                            required
                        /><br />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
