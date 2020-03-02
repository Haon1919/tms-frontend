import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import moment from 'moment';


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
};

type TimeslotSelectProps = {
    selectedTimeslot: number,
    handleTimeslotChange: (event: any) => void,
    lesson: Lesson
};

function formatTime(startTime: string, endTime: string) {
    return `${moment(new Date(startTime)).format("h:mmA")}-${moment(new Date(endTime)).format("h:mmA")}`;
}

const timeStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center'
        }
    }),
);

const TimeslotSelect: React.FC<TimeslotSelectProps> = ({ selectedTimeslot, handleTimeslotChange, lesson }) => {
    const timeSelectClass = timeStyles();
    return (
        <Select
            value={selectedTimeslot}
            onChange={handleTimeslotChange}
            classes={timeSelectClass}
        >
            {
                lesson.openSlots.map((slot, i) => (
                    <MenuItem key={i} value={i}>
                        {formatTime(slot.startTime, slot.endTime)}
                    </MenuItem>
                ))
            }
        </Select>
    );
}

export default TimeslotSelect;