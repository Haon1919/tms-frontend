import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import styles from '../styles/Lesson.module.scss';


export const Lesson : React.FC= () => {
    let {lessonId} = useParams();
    return (
        <section className={styles.lesson}>
            <h1>Lesson</h1>
            <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                    label="Start Time"
                    placeholder="08:00 AM"
                    mask="__:__ _M"
                    value={new Date()}
                    onChange={date => console.log("dateChanged")}
                />
                <KeyboardTimePicker
                    label="EndTime Time"
                    placeholder="08:00 AM"
                    mask="__:__ _M"
                    value={new Date()}
                    onChange={date => console.log("dateChanged")}
                />
            </MuiPickersUtilsProvider>
            </div>
            <h2>Homework</h2>
            <ul className={styles.homework_items}>
                <li>
                    Homework item 1
                </li>
                <li>
                    Homework item 2
                </li>
                <li>
                    Homework item 3
                </li>
            </ul>
            <button className={styles.cancel_lesson}>Cancel Lesson</button>
            <Link to ="/Calendar">View All Lessons</Link>
        </section>
    );
}