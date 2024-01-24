import React from 'react'

export default function LoginForm() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" action="http://localhost:3001/login" method="post">
                <div className="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>

                <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div className=" form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
