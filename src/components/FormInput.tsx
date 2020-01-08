import React, { Dispatch } from 'react';
import styles from '../styles/CreateAccount.module.scss';

type FormData = {
    focusedInput: string,
    day: string,
    month: string,
    year: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string
}

type ReducerParams = {
    type: string,
    formDataKey ?: keyof FormData,
    value: string
}

type FormInputProps = {
    inputType: string,
    inputChange : React.Dispatch<ReducerParams>,
    label: keyof FormData,
    currentValue: string,
    selectedLabel: string
}

export const FormInput: React.FC<FormInputProps> = ({inputChange, label, inputType, currentValue, selectedLabel}) => {
    const changeInputData = (e: React.FormEvent<HTMLInputElement>): void => {
        const action: ReducerParams = {
            type: "UPDATEFORM",
            value: e.currentTarget.value,
            formDataKey: label
        }
        inputChange(action);
    }

    const changeInputFocus = () => {
        const action: ReducerParams = {
            type: "FOCUS",
            value: label,
        }
        inputChange(action);
    }
    return (
        <div className={`${styles.inputContainer} ${label === selectedLabel ? styles.focusedInput : ""}`}>
            <label>{label}</label>
            <input onFocus={changeInputFocus} onChange={changeInputData} type={inputType} value={currentValue}/>
        </div>
    );
}