import React from 'react';
// @ts-ignore
import styles from "../styles/Resources.module.scss";

const ResourceDownload : React.FC = () => {
    return (
        <section className={styles.linkContainer}>
            <h1>Download Me!</h1>
            <a>Download</a>
        </section>
    )
}

export default ResourceDownload;