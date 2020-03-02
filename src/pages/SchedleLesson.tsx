import React from 'react';
import {useParams} from 'react-router-dom';
import {
    MuiPickersUtilsProvider,
    DatePicker,
    KeyboardTimePicker 
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import styles from '../styles/ScheduleLesson.module.scss';
import {useHistory, Link} from 'react-router-dom';

export const ScheduleLesson : React.FC= () => {
    let {date} = useParams();

    let history = useHistory();

    const handelLessonCreation = () => {
        history.push("/Calendar");
    }
    return (
        <section className={styles.schedule_lesson}>
            <h1>Schedule Lesson</h1>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    onChange={()=>console.log("hello")}
                    label="Lesson date"
                    value={moment(date)}
                    format="dd/MM/yyyy"
                    disableToolbar={true}
                    disabled={true}
                />
            <KeyboardTimePicker
                label="Start Time"
                placeholder="08:00 AM"
                mask="__:__ _M"
                value={new Date()}
                onChange={date => console.log("dateChanged")}
            />

            <KeyboardTimePicker
                label="End Time"
                placeholder="08:00 AM"
                mask="__:__ _M"
                value={new Date()}
                onChange={date => console.log("dateChanged")}
            />
            </MuiPickersUtilsProvider>

            <label>Cost</label>
            <p>$10.00</p>

            <button onClick={handelLessonCreation} className={styles.create_lesson}>Create Lesson</button>
            <Link to ="/Calendar">Cancel</Link>
        </section>
    );
}