import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar sticky">
                <div className="max-width">
                    <div className="logo">
                        <Link to="/">Portfolio.</Link>
                    </div>
                    <ul className="menu">
                        <li>
                            <Link to="/admin" className="menu-btn">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="addProject" className="menu-btn">
                                Add Project
                            </Link>
                        </li>
                        <li>
                            <Link to="addSkill" className="menu-btn">
                                Add Skill
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="menu-btn">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
