import React from 'react';
import styles from '../styles/Resources.module.scss';

const ResourceLink : React.FC = () => {
    return (
        <section className={styles.linkContainer}>
            <h1>Go to a new page!</h1>
            <a>View</a>
        </section>
    )
}

export default ResourceLink;