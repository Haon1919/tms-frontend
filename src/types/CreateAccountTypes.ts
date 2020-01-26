export type FormData = {
    focusedInput: string,
    birthday: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    guardianEmail: string 
}

export type ReducerParams = {
    type: string,
    formDataKey?: keyof FormData,
    value: string
}