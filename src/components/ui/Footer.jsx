/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    // const login = () => {
    //     window.location.href = '/login'
    // }
    return (
        <footer>
            <span>Created By <b>Ravindra</b> | <span className="far fa-copyright"></span> 2023 All rights reserved.
                <div>
                    <a><Link to={'loginPage'}>Login </Link></a>||
                    <a><Link to={'SignupPage'}> Signup</Link></a>
                </div>
            </span>
        </footer >
    )
}
