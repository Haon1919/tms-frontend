import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import styles from '../styles/ScheduleLesson.module.scss';
import {Link } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import SelectBox from '../components/SelectBox';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker
} from '@material-ui/pickers';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import {LessonType, SingleLesson} from '../types/LessonTypes';

//TODO: Remove when network request is implemented
const lessonTypes: LessonType[] = [
    {
        packageId: 1,
        name: "violin",
        cost: .54
    },
    {
        packageId: 2,
        name: "piano",
        cost: .42
    },
    {
        packageId: 3,
        name: "voice",
        cost: .3
    }
];

function fetchLessons(): Promise<LessonType[]> {
    return new Promise((resolve) => {
        resolve(lessonTypes);
    })
}

function scheduleLesson(sl: SingleLesson): Promise<number> {
    return new Promise((resolve) => {
        //I did this just si he linter didnt complaine about not using the parameter
        let packageId = sl.packageId
        console.log(`Submitted lesson request of package ${packageId}`);
        resolve(200);
    })
}

export const ScheduleLesson: React.FC = () => {
    let { date } = useParams();

    const [startTime, setStartTime] = useState(moment(date));
    const [endTime, setEndTime] = useState(moment(date).add(30, "minutes"));
    const [typeIndex, setTypeIndex] = useState(0);
    const [typeList, setTypeList] = useState<LessonType[] | null>(null);
    const [scheduleSuccess, setScheduleSuccess] = useState(false);
    const [scheduleFaliure, setScheduleFaliure] = useState(false);

    useEffect(() => {
        fetchLessons().then(
            (res: LessonType[]) => {
                setTypeList(res);
            }
        );
    });

    if (typeList === null) return null;

    const handelLessonCreation = () => {
        const lessonToBeScheduled = {
            startTime: startTime.format(),
            endTime: endTime.format(),
            packageId: typeList[typeIndex].packageId
        }

        scheduleLesson(lessonToBeScheduled).then(res => {
            if (res === 200) {
                setScheduleSuccess(true);
            } else {
                setScheduleFaliure(true);
            }
        }).catch(err => {
            setScheduleFaliure(true);
            console.log(err);
        });
    }

    const handleStartDateChange = (date: any) => {
        let newStartTime = moment(date);
        //Adjusts the start time of the lesson so that at a minimum lessons are 30 minutes
        //TODO: Talk with the team and see if this minimum lesson length for one off lessons could be abstracted.
        if (endTime.isBefore(moment(newStartTime).add(30, "minutes"))) {
            setEndTime(moment(newStartTime).add(30, "minutes"));
            setStartTime(newStartTime);
        } else {
            setStartTime(newStartTime);
        }
    }

    const handleEndDateChange = (date: any) => {
        let newEndTime = moment(date)
        //Adjusts the end time of the lesson so that at a minimum lessons are 30 minutes
        //TODO: Talk with the team and see if this minimum lesson length for one off lessons could be abstracted.
        if (startTime.isAfter(newEndTime) || startTime.isAfter(moment(newEndTime).subtract(30, "minutes"))) {
            setStartTime(moment(newEndTime).subtract(30, "minutes"));
            setEndTime(newEndTime);
        } else {
            setEndTime(newEndTime);
        }
    }

    const calculateLessonCost = (): string => {
        if (typeList !== null) {
            let totalTime = endTime.diff(startTime, "minutes");
            let rate = typeList[typeIndex].cost;
            return `$${(totalTime * rate).toFixed(2)}`;
        } else {
            throw Error()
        }
    }

    return (
        <section className={styles.schedule_lesson}>
            <h1>Schedule Lesson</h1>

            <Snackbar
                open={scheduleSuccess}
                autoHideDuration={6000}
                onClose={() => setScheduleSuccess(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert variant="filled" onClose={() => setScheduleSuccess(false)} severity="success">
                    Lesson updated successfully!
                </Alert>
            </Snackbar>

            <Snackbar
                open={scheduleFaliure}
                autoHideDuration={6000}
                onClose={() => setScheduleFaliure(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert variant="filled" onClose={() => setScheduleFaliure(false)} severity="error">
                    <AlertTitle>Uhoh!</AlertTitle>
                    We couldnt update your lesson. Please contact your instructor or try again later.
                </Alert>
            </Snackbar>


            <div className={styles.date_picker}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                        label="Start Time"
                        placeholder="08:00 AM"
                        mask="__:__ _M"
                        value={startTime}
                        onChange={handleStartDateChange}
                    />

                    <KeyboardTimePicker
                        label="End Time"
                        placeholder="08:00 AM"
                        mask="__:__ _M"
                        value={endTime}
                        onChange={handleEndDateChange}
                    />
                </MuiPickersUtilsProvider>
            </div>

            <SelectBox
                handleItemSelect={(e: any) => setTypeIndex(e.target.value)}
                currentValue={typeIndex}
                items={typeList}
                formatInput={(t: LessonType) => t.name}
            />

            <div className={styles.price}>
                <label>Cost</label>
                <p>{calculateLessonCost()}</p>
            </div>

            <button onClick={handelLessonCreation} className={styles.create_lesson}>Create Lesson</button>
            <Link to="/Calendar">Cancel</Link>
        </section>
    );
}