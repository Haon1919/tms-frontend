import moment from 'moment';

const lessonTypes = [
    {
        startTime: moment().add({ days: 1, hours: 1 }).minute(0).format("YYYY-MM-DD HH:mm:ss"),
        endTime: moment().add({ days: 1, hours: 1, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss"),
        instructor: "Whitney Twigg",
        homeworkNotes: "",
        parentNotes: "",
        openSlots: [
            {
                startTime: moment().add(2, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 2, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(3, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 3, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(4, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 4, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            }
        ]
    },
    {
        startTime: moment().add({ days: 1, hours: 1 }).minute(0).format("YYYY-MM-DD HH:mm:ss"),
        endTime: moment().add({ days: 1, hours: 1, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss"),
        instructor: "Whitney Twigg",
        homeworkNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        parentNotes: "",
        openSlots: [
            {
                startTime: moment().add(2, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 2, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(3, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 3, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(4, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 4, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            }
        ]
    },
    {
        startTime: moment().add({ days: 1, hours: 1 }).minute(0).format("YYYY-MM-DD HH:mm:ss"),
        endTime: moment().add({ days: 1, hours: 1, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss"),
        instructor: "Whitney Twigg",
        homeworkNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        parentNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        openSlots: [
            {
                startTime: moment().add(2, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 2, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(3, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 3, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(4, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 4, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            }
        ]
    },
    {
        startTime: moment().add({ days: 1, hours: 1 }).minute(0).format("YYYY-MM-DD HH:mm:ss"),
        endTime: moment().add({ days: 1, hours: 1, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss"),
        instructor: "Whitney Twigg",
        homeworkNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        openSlots: [
            {
                startTime: moment().add(2, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 2, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(3, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 3, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(4, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 4, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            }
        ]
    },
    {
        startTime: moment().add({ days: 1, hours: 1 }).minute(0).format("YYYY-MM-DD HH:mm:ss"),
        endTime: moment().add({ days: 1, hours: 1, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss"),
        instructor: "Whitney Twigg",
        homeworkNotes: "",
        openSlots: [
            {
                startTime: moment().add(2, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 2, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(3, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 3, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(4, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 4, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            }
        ]
    },
    {
        startTime: moment().add({ hours: 1 }).minute(0).format("YYYY-MM-DD HH:mm:ss"),
        endTime: moment().add({ hours: 1, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss"),
        instructor: "Whitney Twigg",
        homeworkNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        openSlots: [
            {
                startTime: moment().add(2, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 2, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(3, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 3, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            },
            {
                startTime: moment().add(4, 'hours').format("YYYY-MM-DD HH:mm:ss"),
                endTime: moment().add({ hours: 4, minutes: 30 }).format("YYYY-MM-DD HH:mm:ss")
            }
        ]
    }
];

export default lessonTypes