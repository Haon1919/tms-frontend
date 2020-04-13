import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import styles from '../styles/Resources.module.scss';

export const TextResourceView: React.FC= () => {
    let location = useLocation();
    let { resource } = location.state;
    return (
        <section className={styles.text_resource_view}>
            <h1>{resource.title}</h1>
            <p>{resource.content}</p>
            <Link  to="/Resources">Show resource</Link>
        </section>
    );
}