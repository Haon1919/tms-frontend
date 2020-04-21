import React, {useEffect, useState} from 'react'
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import styles from '../styles/LessonPlan.module.scss';
import Requests from '../Requests';

export const LessonPlan : React.FC= () => {

    const [selectedDays, setSelectedDays] = useState([]);
    const [terms, setTerms] = useState([]);

    const days = [{
        1: {day:"Monday",
        openSlots: [{
            startTime: "00:00:00",
            endTime: "00:00:00",
            instructor: {
                id: 1,
                name: "Whitney",
            },
            exceptions: [
                "none",
            ],
        },

        ]},
        2: {

        }
    }];

    useEffect(() => {
        setTerms(Requests.getOpenTerms());
    }, []);

    useEffect(()=>{
        console.log(selectedDays, "why no log?");
    }, [selectedDays]);

    const displayLessonTimeSelections = () => {
        let tempSelectedDays = [];
        let inputs = document.getElementsByTagName("input");
        for(let input in inputs){
            if(inputs[input].checked){
                switch(inputs[input].id){
                    case "weekday-mon":
                        tempSelectedDays.push("Monday");
                        break;
                    case "weekday-tue":
                        tempSelectedDays.push("Tuesday");
                        break;
                    case "weekday-wed":
                        tempSelectedDays.push("Wednesday");
                        break;
                    case "weekday-thu":
                        tempSelectedDays.push("Thursday");
                        break;
                    case "weekday-fri":
                        tempSelectedDays.push("Friday");
                        break;
                    case "weekday-sat":
                        tempSelectedDays.push("Saturday");
                        break;
                    case "weekday-sun":
                        tempSelectedDays.push("Sunday");
                        break;
                }
                // @ts-ignore
                setSelectedDays(tempSelectedDays);
            }
        }
    };

    return (
        <section>
            <h1>Lesson Type</h1>
            <select>
                <option>Violin</option>
                <option>Voice</option>
                <option>Viola</option>
            </select>
            <br/>
            <h1>Lesson Day</h1>
            <div className={styles.weekDays_selector}>
                <input type="checkbox" id="weekday-mon" className={styles.weekday} onClick={displayLessonTimeSelections}/>
                <label htmlFor="weekday-mon">M</label>
                <input type="checkbox" id="weekday-tue" className={styles.weekday} onClick={displayLessonTimeSelections}/>
                <label htmlFor="weekday-tue">T</label>
                <input type="checkbox" id="weekday-wed" className={styles.weekday} onClick={displayLessonTimeSelections}/>
                <label htmlFor="weekday-wed">W</label>
                <input type="checkbox" id="weekday-thu" className={styles.weekday} onClick={displayLessonTimeSelections}/>
                <label htmlFor="weekday-thu">T</label>
                <input type="checkbox" id="weekday-fri" className={styles.weekday} onClick={displayLessonTimeSelections}/>
                <label htmlFor="weekday-fri">F</label>
                <input type="checkbox" id="weekday-sat" className={styles.weekday} onClick={displayLessonTimeSelections}/>
                <label htmlFor="weekday-sat">S</label>
                <input type="checkbox" id="weekday-sun" className={styles.weekday} onClick={displayLessonTimeSelections}/>
                <label htmlFor="weekday-sun">S</label>
            </div>
            <br/>
            <h1>Lesson Time</h1>

            {selectedDays.map((day: React.ReactNode) =>
                <div>
                <h1>{day}</h1>
                    <select>
                        <option>1</option>
                    </select>
                </div>
            )}
        </section>
    );
}