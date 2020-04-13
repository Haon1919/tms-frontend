import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import arrow from "../assets/images/downArrow.svg";
import styles from '../styles/Header.module.scss';
import Request from '../Requests';
import { UserContext } from '../contexts/UserContext';

export const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [expandGeneral, toggleExpGeneral] = useState(true);
    const [expandStudent, toggleExpStudent] = useState(false);

    // const { user, updateUser } = useContext(UserContext);
    const { user, updateUser } = useContext(UserContext);
    const location = useLocation();

    useEffect(() => setToggleMenu(false), [location]);

    const openCategory = () => {
        toggleExpStudent(!expandStudent);
        toggleExpGeneral(!expandGeneral);
    }
    return (
        <section className={styles.header} id = "header">
            <section className={styles.banner}>
                <div className={styles.hamburger_wrapper}>
                    <div
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className={toggleMenu ? `${styles.hamburger} ${styles.menu_open}` : styles.hamburger}
                    >
                        <div className={styles.middle_bar}></div>
                    </div>
                </div>
                <div className={styles.title}>
                    <Link to="/">Twigg Music Studio</Link>
                </div>
            </section>
            <div className={toggleMenu ? `${styles.menu_pane} ${styles.menu_open}` : styles.menu_pane}>
                <ul className={styles.menu}>
                    <li className={expandGeneral ? `${styles.open} ${styles.general}` : styles.general}>
                        <button onClick={() => openCategory()}>
                            <span>General</span>
                            {user !== undefined && Object.keys(user).length > 0 && <img alt="" src={arrow} />}
                        </button>
                        <ul>
                            <li>
                                <Link to="/">Landing</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/Blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Resources">Resources</Link>
                            </li>
                            <li>
                                <Link to="/Services">Services</Link>
                            </li>
                        </ul>
                    </li>
                    {user !== undefined && Object.keys(user).length > 0 &&
                        <li className={expandStudent ? `${styles.open} ${styles.student}` : styles.student}>
                            <button onClick={() => openCategory()}>
                                <span>Student</span>
                                <img alt="" src={arrow} />
                            </button>
                            <ul>
                                <li>
                                    <Link to="/Calendar">Calendar</Link>
                                </li>
                                <li>
                                    <Link to="/Wallet">Wallet</Link>
                                </li>
                                <li>
                                    <Link to="/Settings">Settings</Link>
                                </li>
                                <li>
                                    <Link to="/ScheduleLesson">Schedule Lesson</Link>
                                </li>
                                <li>
                                    <Link to="/Lesson">Lesson</Link>
                                </li>
                                <li>
                                    <Link to="/AgreementDocs">Agreement Docs</Link>
                                </li>
                                <li>
                                    <Link to="/Dashboard">Dashboard</Link>
                                </li>
                            </ul>
                        </li>
                    }
                    {user !== undefined && Object.keys(user).length === 0 ?
                        (<>
                            <li className={styles.login}>
                                <Link to="/Login">Login</Link>
                            </li>
                            <li className={styles.create_account}>
                                <Link to="/CreateAccount">Create Account</Link>
                            </li>
                        </>)
                        :
                        <li className={styles.logout}>
                            <Link onClick={() => {
                                if (updateUser && user !== undefined && 'id' in user){
                                    Request.logout(user.id)
                                    updateUser();
                                    if(expandStudent) {
                                        openCategory();
                                    }
                                }
                            }} to="/">Logout</Link>
                        </li>
                    }
                </ul>
                <div
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className={styles.overlay}
                >
                </div>
            </div>
        </section>
    )
}