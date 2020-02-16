import React from 'react'
import catImage from '../assets/images/cat.jpeg'
import { Link, useHistory } from 'react-router-dom';
import styles from '../styles/BlogItem.module.scss'

const BlogItem : React.FC= () => {
    return (
        <section className={styles.blog_container}>
            <img src={catImage} alt="Cat" className={styles.blog_image}/>
            <p className={styles.blog_snippet}>Amagna urna viverra ipsum, vitae egesnte non elementum gravida, lectus tortor ultrices dolor, eu imperdiet ipsum odio efficitur felis. Quisque sit amet bibendum leo, vitae auctor diam. In id cursus ante. Cras vel semper lacus.</p>
            <Link to="/blog" className={styles.blog_link}>View</Link>
        </section>
    );
}

export default BlogItem;