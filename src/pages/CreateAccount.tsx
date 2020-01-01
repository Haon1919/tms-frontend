import React from 'react';
import styles from '../styles/CreateAccount.module.scss';

export const CreateAccount: React.FC = () => {
    return (
        <section className={styles.create_account}>
            <h1>Create Account</h1>
            <form>
                <label htmlFor="datePicker" className={styles.birthdayLabel}>Birthday</label>
                <div className={styles.date_picker} id="datePicker">
                    <input type="month" value="MM" />
                    <input type="day" value="DD" />
                    <input type="year" value="YYYY" />
                </div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" />
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" />
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
                <input type="submit" value="Create Account" />
            </form>
        </section>
    );
}