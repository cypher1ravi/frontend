/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const login = () => {
        window.location.href = '/login'
    }
    return (
        <footer>
            <span>Created By <a ><Link to={'loginPage'}>Ravindra</Link></a> | <span className="far fa-copyright"></span> 2023 All rights
                reserved.</span>
        </footer>
    )
}
