import React, { useState } from 'react';
import '../../style.css'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Redirect to admin panel if login is successful
                // window.location.href = result.route;
                navigate(`/${result.route}`)

            } else {
                alert(result.message || 'Invalid username or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Internal Server Error');
        }
    };

    return (
        <div>
            <nav class="navbar sticky">
                <div class="max-width">
                    <div class="logo"><a href='#/'>Portfolio.</a></div>
                    <ul class="menu">
                        <li> <a href='/' class="menu-btn">Home</a></li>
                    </ul>
                </div>
            </nav>
            <div className="login">
                <div className=" column right login-container ">
                    <div className="text"><h2>Login</h2></div>
                    <br />
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="fields">
                            <div className="field name">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" placeholder="User Name" required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div>

                            <div className="field email">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" placeholder="Password" required value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="button-area">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <h5>* This page is only for Administrator *</h5>
                </div>
            </div>
        </div>

    );
}
