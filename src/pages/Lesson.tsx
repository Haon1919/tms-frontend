import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';
import Dialog from '@material-ui/core/Dialog';
import Snackbar from '@material-ui/core/Snackbar';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Alert from '@material-ui/lab/Alert';
import styles from '../styles/Lesson.module.scss';
import moment from 'moment';
import CustomExpansionPanel from '../components/CustomExpansionPanel';
import TimeslotSelect from '../components/TimeslotSelect';

//Remove import once network request to fetch lesson is implemented
import lessonTypes from "../assets/JSON/lessonVariations";

type TimeSlot = {
    startTime: string,
    endTime: string
};

type Lesson = {
    startTime: string,
    endTime: string,
    instructor: string,
    homeworkNotes: string,
    parentNotes?: string
    openSlots: TimeSlot[]
}

//TODO: Add button to update lesson and success and error snackbars from material ui

//Remove once network request to fetch lesson is implemented. 
/* 
    You can view how the page changes with different attributes of the lesson by changing the index of lessonTypes
    0: Lesson with empty homework notes and parent notes,
    1: Lesson with homework notes and empty parent notes,
    2: Lesson with homework notes and parent notes,
    3: Lesson with homework notes and no parent notes,
    4: Lesson with empty homework notes and no parent notes,
    5: Lesson that is within the 24 hour cut off window for lesson cancelations
*/
const exampleLesson: Lesson = lessonTypes[5];

//Remove once network request to fetch lesson is implemented. 
function fetchLesson(id: number): Promise<Lesson> {
    return new Promise((resolve) => {
        resolve(exampleLesson);
    });
}

function updateLesson(ts: TimeSlot): Promise<Number> {
    return new Promise((resolve) => {
        resolve(200);
    });
}

function formatTime(startTime: string, endTime: string) {
    return `${moment(new Date(startTime)).format("h:mmA")}-${moment(new Date(endTime)).format("h:mmA")}`;
}

const checkboxStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: '5vh',
        }
    }),
);

export const Lesson: React.FC = () => {
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [afterCancelationCutoff, setAfterCancelationCutoff] = useState(false);
    const [selectedTsIndex, setSelectedTsIndex] = useState(-1);
    const [cancelLesson, setCancelLesson] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [updateFaliure, setUpdateFaliure] = useState(false);
    let { lessonId } = useParams();
    let history = useHistory();
    const checkboxClass = checkboxStyles();

    useEffect(() => {
        if (lessonId !== undefined) {
            fetchLesson(parseInt(lessonId))
                .then(res => {
                    const currentTimeslot: TimeSlot = {
                        startTime: res.startTime,
                        endTime: res.endTime
                    };
                    res.openSlots.push(currentTimeslot);
                    setLesson(res);
                    setSelectedTsIndex(res.openSlots.length - 1);
                });
        } else {
            //TODO: Remove this and use exact route
            history.push("/")
        }
    }, [lessonId, history]);

    const markCancelLesson = (event: any) => {
        setCancelLesson(event.target.checked);
    }

    const handleUpdateFailClose = () => {
        setUpdateFaliure(false);
    }

    const handleUpdateSuccessClose = () => {
        setUpdateSuccess(false);
    }

    const handleLessonCancelation = () => {
        let now = moment();
        let startTime = lesson !== null ? moment(lesson.startTime) : null;
        if (startTime !== null && now.isBefore(startTime.subtract(24, "hours"))) {
            //add lesson cancelation request
            history.push("/Calendar")
        } else {
            setAfterCancelationCutoff(true);
        }
    }

    const handleLessonUpdate = () => {
        if (cancelLesson) {
            handleLessonCancelation();
        } else {
            if (lesson !== null) {
                let newTimeSlot = {
                    startTime: lesson.startTime,
                    endTime: lesson.endTime
                }
                updateLesson(newTimeSlot).then(res => {
                    if (res !== 200) {
                        setUpdateFaliure(true);
                    } else {
                        setUpdateSuccess(true);
                    }
                })
            }
        }
    }

    const handleTimeslotChange = (event: any) => {
        if (lesson !== null) {
            setSelectedTsIndex(event.target.value);
            setLesson({
                ...lesson,
                startTime: lesson.openSlots[selectedTsIndex].startTime,
                endTime: lesson.openSlots[selectedTsIndex].endTime
            });
        }
    }

    if (lesson === null || selectedTsIndex === -1) return null;

    return (
        <section className={styles.lesson}>
            <h1>Lesson</h1>

            <Snackbar
                open={updateSuccess}
                autoHideDuration={6000}
                onClose={handleUpdateSuccessClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert variant="filled" onClose={handleUpdateSuccessClose} severity="success">
                    Lesson updated successfully!
                </Alert>
            </Snackbar>

            <Snackbar
                open={updateFaliure}
                autoHideDuration={6000}
                onClose={handleUpdateFailClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert variant="filled" onClose={handleUpdateFailClose} severity="error">
                    <AlertTitle>Uhoh!</AlertTitle>
                    We couldnt update your lesson. Please contact your instructor or try again later.
                </Alert>
            </Snackbar>

            <Dialog open={afterCancelationCutoff}>
                <article className={styles.cancelation_cuttof_modal}>
                    <ClearIcon className={styles.exit_button} onClick={() => setAfterCancelationCutoff(false)} />
                    <h1>Uhoh!</h1>
                    <p>It looks like your lesson is within the cancelation cutoff window. You are unable to cancel your lesson to recieve a refund. Please contact your instructor with any further questions regarding this policy.</p>
                </article>
            </Dialog>

            <div className={styles.time_picker}>
                <h2>{moment().isBefore(moment(lesson.startTime).subtract(24, "hours")) ? "Update Timeslot" : "Timeslot"}</h2>
                {moment().isBefore(moment(lesson.startTime).subtract(24, "hours")) ? (
                    <TimeslotSelect
                        lesson={lesson}
                        selectedTimeslot={selectedTsIndex}
                        handleTimeslotChange={handleTimeslotChange}
                    />

                ) : (
                        <div>{formatTime(lesson.startTime, lesson.endTime)}</div>
                    )}
            </div>

            <div className={styles.instructor}>
                <h2>Instructor</h2>
                <p>{lesson.instructor}</p>
            </div>

            {lesson.homeworkNotes === "" ? (
                <div className={styles.homework_notes}>
                    <h2>Homework</h2>
                    <p>No homework notes availible</p>
                </div>
            ) : (
                    <CustomExpansionPanel title="Homework" details={lesson.homeworkNotes} />
                )}

            {(lesson.parentNotes !== null && lesson.parentNotes !== undefined) &&
                <div className={styles.note_container}>
                    {lesson.parentNotes === "" ? (
                        <div className={styles.parent_notes}>
                            <h2>Parent Notes</h2>
                            <p>No parent notes availible</p>
                        </div>
                    ) : (
                            <CustomExpansionPanel title="Parent Notes" details={lesson.parentNotes} />
                        )}
                </div>
            }
            {moment().isBefore(moment(lesson.endTime)) &&
                <FormControlLabel
                    value="top"
                    classes={checkboxClass}
                    control={<Checkbox onChange={(markCancelLesson)} color="default" />}
                    label="Cancel lesson"
                    labelPlacement="top"
                />
            }
            <div className={styles.actions}>
                {moment().isBefore(moment(lesson.endTime)) &&
                    <button onClick={handleLessonUpdate} className={styles.cancel_lesson}>Update Lesson</button>
                }
                <Link to="/Calendar">View All Lessons</Link>
            </div>
        </section>
    );
}