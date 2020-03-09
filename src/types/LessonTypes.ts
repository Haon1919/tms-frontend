export type LessonType = {
    packageId: number,
    name: string,
    cost: number
};

export type SingleLesson = {
    startTime: string,
    endTime: string,
    packageId: number
};

export type TimeSlot = {
    startTime: string,
    endTime: string
};

export type UpdateLesson = {
    startTime: string,
    endTime: string,
    instructor: string,
    homeworkNotes: string,
    parentNotes?: string,
    openSlots: TimeSlot[],
    type: string
}
