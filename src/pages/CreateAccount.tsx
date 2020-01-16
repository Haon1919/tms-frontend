import React, { useReducer } from 'react';
import styles from '../styles/CreateAccount.module.scss';
import { FormInput } from '../components/FormInput';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    DatePicker
} from '@material-ui/pickers';

type FormData = {
    focusedInput: string,
    date: string,
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
    date: new Date().toString(),
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
            if (action.formDataKey !== undefined) {
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

    const changeDate = (date: Date) => {
        const action: ReducerParams = {
            type: "UPDATEFORM",
            formDataKey: "date",
            value: date.toString()
        };
        dispatch(action);
    }

    return (
        <section className={styles.create_account}>
            <h1>Create Account</h1>
            <form>
                <div className={styles.date_picker}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            onOpen={() => dispatch({type: "FOCUS", value: ""})}
                            views={["year"]}
                            label="Year"
                            value={new Date(formData.date)}
                            onChange={date => {
                                if(date !== null) changeDate(date)
                            }}
                            format="yyyy"
                            disableFuture={true}
                            disableToolbar={true}
                        />      
                        <DatePicker
                            onOpen={() => dispatch({type: "FOCUS", value: ""})}
                            views={["month"]}
                            label="Month"
                            value={new Date(formData.date)}
                            onChange={date => {
                                if(date !== null) changeDate(date)
                            }}
                            format="MMMM"
                            disableFuture={true}
                            disableToolbar={true}
                        />     
                         <DatePicker
                            onOpen={() => dispatch({type: "FOCUS", value: ""})}
                            views={["date"]}
                            label="Day"
                            value={new Date(formData.date)}
                            onChange={date => {
                                if(date !== null) changeDate(date)
                            }}
                            format="dd"
                            disableFuture={true}
                            disableToolbar={true}
                        />
                    </MuiPickersUtilsProvider>
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