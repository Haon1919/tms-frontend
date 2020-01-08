import React, { useReducer } from 'react';
import styles from '../styles/CreateAccount.module.scss';
import { FormInput } from '../components/FormInput';

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
    formDataKey?: keyof FormData,
    value: string
}

const initialFormData: FormData = {
    focusedInput: "",
    day: "",
    month: "",
    year: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
}

function createAccountReducer(state: FormData, action: ReducerParams) {
    switch (action.type) {
        case ("FOCUS"):
            return {
                ...state,
                focusedInput: action.value
            }
        case ("UPDATEFORM"):
            if(action.formDataKey !== undefined) {
                let stateCopy = { ...state };
                stateCopy[action.formDataKey] = action.value;
                return stateCopy;
            } else {
                throw Error("Expected formDataKey: string, recieved formDataKey: undefined");
            }
        default:
            throw Error("Invalid action type.")
    }
}

export const CreateAccount: React.FC = () => {
    const [formData, dispatch] = useReducer(createAccountReducer, initialFormData);
    return (
        <section className={styles.create_account}>
            <h1>Create Account</h1>
            <form>
                <label htmlFor="datePicker" className={styles.birthdayLabel}>Birthday</label>
                <div className={styles.date_picker} id="datePicker">
                    <input type="month" value="MM" />
                    <input type="day" value="DD" />
                    <input type="year" value="YYYY" />
                </div>
                <FormInput 
                    inputChange={dispatch} 
                    label="firstName" 
                    inputType="text" 
                    currentValue={formData.firstName} 
                    selectedLabel={formData.focusedInput} 
                />
                <FormInput 
                    inputChange={dispatch} 
                    label="lastName" 
                    inputType="text" 
                    currentValue={formData.lastName} 
                    selectedLabel={formData.focusedInput} 
                />
                <FormInput 
                    inputChange={dispatch} 
                    label="email" inputType="text" 
                    currentValue={formData.email} 
                    selectedLabel={formData.focusedInput}
                />
                <FormInput 
                    inputChange={dispatch} 
                    label="phone" 
                    inputType="phone" 
                    currentValue={formData.phone} 
                    selectedLabel={formData.focusedInput}
                />
                <FormInput 
                    inputChange={dispatch} 
                    label="password" 
                    inputType="password" 
                    currentValue={formData.password} 
                    selectedLabel={formData.focusedInput} 
                />
                <input className={styles.submit} type="submit" value="Create Account" />
            </form>
        </section>
    );
}