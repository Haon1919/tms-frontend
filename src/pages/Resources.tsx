import React from 'react'
import styles from '../styles/Resources.module.scss';
import ResourceLink from "../components/ResourceLink";
import ResourceDownload from "../components/ResourceDownload";

export const Resources : React.FC= () => {
    return (
        <section className={styles.resources}>
            <h1>Your Resources</h1>
            <ResourceLink></ResourceLink>
            <ResourceDownload></ResourceDownload>

        </section>
    );
}