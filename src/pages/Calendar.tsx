import React, {useState} from 'react'
import styles from '../styles/Calendar.module.scss';
import moment from 'moment';

export const Calendar: React.FC = () => {
    const [monthInView, setMonthInView] = useState(moment());

    const renderCalendar = () => {
        const daysInMonth = monthInView.daysInMonth();
        const daysInPreviousMonth = monthInView.subtract(1, "month").daysInMonth();
        const indexOfFirstDayInMonth = moment().startOf("month").day();
        const daysInWeek = 7;
        
        let calendarRows = [];
        let rowElements = [];
        
        if(!calendarRows.length) {
            while(rowElements.length !== indexOfFirstDayInMonth) {
                rowElements.push(
                    <li>
                        {daysInPreviousMonth - (daysInWeek - rowElements.length)}
                    </li>
                )
            }
        }

        for(let x = 0; x < daysInMonth; x++) {
            if(rowElements.length === daysInWeek) {
                calendarRows.push(
                    <ul className={styles.calendar_row}>
                        {rowElements}
                    </ul>
                    );
                rowElements = [];
            }
            rowElements.push(
                <li>
                    {x + 1}
                </li>
            );
        }

        if(rowElements.length < daysInWeek) {
            for(let x = 0; x < daysInWeek - rowElements.length; x ++) {
                rowElements.push(
                    <li>
                        {x}
                    </li>
                )
            }
        }

        calendarRows.push(
            <ul className={styles.calendar_row}>
                {rowElements}
            </ul>);
            
        return calendarRows;
    }

    return (
        <section className={styles.calendar}>
            <ul className={styles.month_list}>
                <li>
                    <h1>January</h1>
                </li>
                <li>
                    <h1>Feburary</h1>
                </li>
            </ul>
            <ul className={styles.day_list}>
                <li>S</li>
                <li>M</li>
                <li>T</li>
                <li>W</li>
                <li>T</li>
                <li>F</li>
                <li>S</li>
            </ul>
            <ul className={styles.calendar}>
                {renderCalendar()}
                {/* <ul className={styles.calendar_row}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
                <ul className={styles.calendar_row}>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
                <ul className={styles.calendar_row}>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
                <ul className={styles.calendar_row}>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
                <ul className={styles.calendar_row}>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
                <ul className={styles.calendar_row}>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul> */}
            </ul>
        </section>
    );
}