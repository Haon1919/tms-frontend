import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import styles from '../styles/Calendar.module.scss';
import moment from 'moment';
import {
    MuiPickersUtilsProvider,
    DatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

type lesson = {
    lessonId : number,
    startTime : string,
    type: string
}

//TODO: Put a some kind of visual indecator arround the current day. 
//TODO: Put a some kind of visual indecator aon past lessons, current lessons, and future lessons

const getLessonDates = () => {
    let id = 1;
    let lessons : lesson[] = [];
    let currentDate = moment();
    for(let x = 0; x < currentDate.daysInMonth(); x++) {
        let addLesson = Math.round(Math.random());
        if(addLesson) {
            let startTime;
            if(x <= currentDate.day()) {
                startTime = currentDate.subtract(currentDate.day() - x, "days").format("");
      
            } else {
                startTime = currentDate.add(currentDate.daysInMonth() - currentDate.month(), "days").format("");
            }
            lessons.push(
                {
                    lessonId: id++,
                    startTime: startTime,
                    type: "Violin"
                }
            );
        }
    }
    return lessons;
};

const fetchLesson = (lessons : lesson[], day : number) => {
    const cd = moment();
    if(cd.date() <= day){
        for(let lesson of lessons) {
            if(moment(lesson.startTime).date() === cd.subtract(cd.date() - day, "days").date()) {
                return lesson;
            }
        }
    } else {
        for(let lesson of lessons) {
            if(moment(lesson.startTime).date() === cd.add(cd.daysInMonth() - day, "days").date()) {
                return lesson;
            }
        }
    }
    return null;
}

export const Calendar: React.FC = () => {
    const [monthInView, setMonthInView] = useState(moment());
    const [lessons, setLessons] = useState<lesson[]>([]);

    useEffect(() => {
        setLessons(getLessonDates())
    }, [])

    const renderCalendar = (month: any) => {
        const daysInMonth = month.daysInMonth();
        const daysInPreviousMonth = month.subtract(1, "month").daysInMonth();
        const indexOfFirstDayInMonth = moment().startOf("month").day();
        const daysInWeek = 7;
        let id = 1;
        
        let calendarRows = [];
        let rowElements = [];
        
        if(!calendarRows.length) {
            while(rowElements.length !== indexOfFirstDayInMonth) {
                rowElements.push(
                    <li className = {styles.non_targt_date} key={id++}>
                        {daysInPreviousMonth - (daysInWeek - rowElements.length)}
                    </li>
                )
            }
        }

        for(let x = 0; x < daysInMonth; x++) {
            if(rowElements.length === daysInWeek) {
                calendarRows.push(
                    <ul key={id++} className={styles.calendar_row}>
                        {rowElements}
                    </ul>
                    );
                rowElements = [];
            }
            let lesson = fetchLesson(lessons, x);
            rowElements.push(
                <li key={id++}>
                    <Link to = {lesson === null ? `/ScheduleLesson/${moment().date(x).format("")}` : `/Lesson/${lesson.lessonId}`}>
                        {x + 1}
                        {lesson !== null &&
                            <span>{lesson.type}</span>
                        }
                    </Link>

                </li>
            );
        }

        if(rowElements.length < daysInWeek) {
            let dayCounter = 1;
            while(rowElements.length !== daysInWeek){
                rowElements.push(
                    <li className = {styles.non_targt_date} key={id++}>
                        {dayCounter++}
                    </li>
                )
            }
        }

        calendarRows.push(
            <ul key={id++} className={styles.calendar_row}>
                {rowElements}
            </ul>
        );
        rowElements = []

        if(calendarRows.length < 6) {
            for(let x = 0; x < daysInWeek; x ++) {
                rowElements.push(
                    <li className = {styles.non_targt_date} key={id++}>
                        {x+1}
                    </li>
                )
            }
            calendarRows.push(
                <ul key={id++} className={styles.calendar_row}>
                    {rowElements}
                </ul>
            );
        }
        return calendarRows;
    }

    return (
        <section className={styles.calendar}>
            <h1>Calendar</h1>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    views={["month"]}
                    label="Month"
                    value={new Date(monthInView.toString())}
                    onChange={(date : any) => {
                        if (date !== null) setMonthInView(date)
                    }}
                    format="MMMM"
                    disableToolbar={true}
                />
            </MuiPickersUtilsProvider>
            <ul className={styles.day_list}>
                <li>S</li>
                <li>M</li>
                <li>T</li>
                <li>W</li>
                <li>T</li>
                <li>F</li>
                <li>S</li>
            </ul>
            <ul className={styles.calendar_container}>
                <ul className={styles.month}>
                    {renderCalendar(moment(monthInView))}
                </ul>
            </ul>
        </section>
    );
}