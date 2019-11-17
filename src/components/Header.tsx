import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <section>
            <ul>
                <li>
                    <Link to="/">Landing</Link>
                </li>
                <li>
                    <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/CreateAccount">CreateAccount</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Calendar">Calendar</Link>
                </li>
                <li>
                    <Link to="/Blog">Blog</Link>
                </li>
                <li>
                    <Link to="/AgreementDocs">AgreementDocs</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Lesson">Lesson</Link>
                </li>
                <li>
                    <Link to="/Resources">Resources</Link>
                </li>
                <li>
                    <Link to="/SchedualLesson">SchedualLesson</Link>
                </li>
                <li>
                    <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/Settings">Settings</Link>
                </li>
                <li>
                    <Link to="/Wallet">Wallet</Link>
                </li>
                <li>
                    <Link to="Login">Login</Link>
                </li>
            </ul>
        </section>
    )
}

export default Header;