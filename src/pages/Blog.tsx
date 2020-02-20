import React from 'react'
import BlogItem from '../components/BlogItem'
import musicalMusings from '../assets/images/musical-musings.jpeg';
import styles from '../styles/Blog.module.scss';

export const Blog : React.FC= () => {
    return (
        <section className={styles.blogs_container}>
            <div className={styles.image_container}>
                <img className={styles.musical_musings} src={musicalMusings} alt="Musical Musings"/>
                <div className={styles.centered_text}><b>Musical Musings</b><br/><br/>Tips from the Teacher</div>
            </div>

            <BlogItem/>
            <BlogItem/>
            {/* We will have to dynamically make a Blog Item Component for every post eventually */}
        </section>
    );
}