import React, { useReducer, useState, useMemo } from 'react';
import { useHistory } from "react-router-dom";
import styles from '../styles/CreateAccount.module.scss';
import { FormInput } from '../components/FormInput';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import {
    MuiPickersUtilsProvider,
    DatePicker
} from '@material-ui/pickers';
import { FormData, ReducerParams } from '../types/CreateAccountTypes';

const initialFormData: FormData = {
    focusedInput: "",
    birthday: new Date().toString(),
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    guardianEmail: ""
}

// eslint-disable-next-line
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// eslint-disable-next-line
const phonePattern = /((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})/;

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

function checkMinorStatus(birthday: string): boolean {
    //Check to see if the user is above the age of 18
    return moment(birthday).isAfter(moment().subtract(18, 'years'));
}

export const CreateAccount: React.FC = () => {
    const [formData, dispatch] = useReducer(createAccountReducer, initialFormData);
    const [failingForms, setFailingForms] = useState<string[]>([]);

    let history = useHistory();
    const isDisabled = checkMinorStatus(formData.birthday) ? 
        (formData.firstName === "" || formData.lastName === "" || formData.guardianEmail === "" || formData.password === "") || !!failingForms.length:
        (formData.firstName === "" || formData.lastName === "" || formData.email === "" || formData.password === "") || !!failingForms.length;

    let emailValidation = useMemo(() => {
        return {
            pattern: emailPattern,
            failedMesg: "Please provide a valid email.",
            changeInvalidFormsList: setFailingForms
        }
    }, []);

    let guardianValidation = useMemo(() => {
        return {
            pattern: emailPattern,
            failedMesg: "Please provide a valid email.",
            changeInvalidFormsList: setFailingForms
        }
    }, []);

    let phoneValidation = useMemo(() => {
        return {
            pattern: phonePattern,
            failedMesg: "Please provide full phone number.",
            changeInvalidFormsList: setFailingForms
        }
    }, []);


    const changeDate = (date: Date) => {
        const action: ReducerParams = {
            type: "UPDATEFORM",
            formDataKey: "birthday",
            value: date.toString()
        };
        dispatch(action);
    }

    const phoneNumberDispatch = (action: ReducerParams): void => {
        if (action.type === "UPDATEFORM") {
            let formattedNumber = "";
            let lastChar = action.value.charAt(action.value.length - 1);

            if (/[(,),\-,^]/.test(lastChar)) {
                switch (lastChar) {
                    case ("("):
                        if (action.value.lastIndexOf(lastChar) !== 0) return;
                        break;
                    case (")"):
                        if (action.value.lastIndexOf(lastChar) !== 4) return;
                        break;
                    case ("-"):
                        let firstDashCheck = action.value.lastIndexOf(lastChar) !== 5 && action.value.length < 9;
                        let secondDashCheck = action.value.lastIndexOf(lastChar) !== 9 && action.value.length > 9;
                        if (firstDashCheck || secondDashCheck) return;
                }
            } else if (/(?=[^0-9])(?=[^\s])/.test(action.value.charAt(action.value.length - 1))) {
                return
            }

            switch (action.value.length) {
                case (3):
                    if (formData.phone.length < action.value.length) {
                        formattedNumber = `(${action.value}) `;
                    } else {
                        formattedNumber = action.value;
                    }
                    break;
                case (9):
                    if (formData.phone.length < action.value.length) {
                        formattedNumber = `${action.value}-`;
                    } else {
                        formattedNumber = action.value;
                    }
                    break;
                case (15):
                    if (formData.phone.length < action.value.length) {
                        formattedNumber = action.value.substring(0, action.value.length - 1);
                    } else {
                        formattedNumber = action.value;
                    }
                    break;
                default:
                    formattedNumber = action.value;
            }
            action.value = formattedNumber
            dispatch(action);
        } else if (action.type === "FOCUS") {
            dispatch(action)
        }
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500)
        }).then(() => {
            history.push("/Dashboard")
        })
    }

    return (
        <section className={styles.create_account}>
            <h1>Create Account</h1>
            <form onSubmit={handleFormSubmit}>
                <div className={styles.date_picker}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            onOpen={() => dispatch({ type: "FOCUS", value: "" })}
                            views={["year"]}
                            label="Year"
                            value={new Date(formData.birthday)}
                            onChange={date => {
                                if (date !== null) changeDate(date)
                            }}
                            format="yyyy"
                            disableFuture={true}
                            disableToolbar={true}
                        />
                        <DatePicker
                            onOpen={() => dispatch({ type: "FOCUS", value: "" })}
                            views={["month"]}
                            label="Month"
                            value={new Date(formData.birthday)}
                            onChange={date => {
                                if (date !== null) changeDate(date)
                            }}
                            format="MMMM"
                            disableFuture={true}
                            disableToolbar={true}
                        />
                        <DatePicker
                            onOpen={() => dispatch({ type: "FOCUS", value: "" })}
                            views={["date"]}
                            label="Day"
                            value={new Date(formData.birthday)}
                            onChange={date => {
                                if (date !== null) changeDate(date)
                            }}
                            format="dd"
                            disableFuture={true}
                            disableToolbar={true}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <FormInput
                    inputChange={dispatch}
                    inputKey="firstName"
                    label="first name"
                    inputType="text"
                    currentValue={formData.firstName}
                    selectedKey={formData.focusedInput}
                    required={true}
                    styles={styles}
                />
                <FormInput
                    inputChange={dispatch}
                    inputKey="lastName"
                    label="last name"
                    inputType="text"
                    currentValue={formData.lastName}
                    selectedKey={formData.focusedInput}
                    required={true}
                    styles={styles}
                />
                <FormInput
                    inputChange={dispatch}
                    label="email"
                    inputKey="email"
                    inputType="text"
                    currentValue={formData.email}
                    selectedKey={formData.focusedInput}
                    required={!checkMinorStatus(formData.birthday)}
                    validation={emailValidation}
                    styles={styles}
                />
                {checkMinorStatus(formData.birthday) &&
                    <FormInput
                        inputChange={dispatch}
                        label="guardian email"
                        inputKey="guardianEmail"
                        inputType="text"
                        currentValue={formData.guardianEmail}
                        selectedKey={formData.focusedInput}
                        required={true}
                        validation={guardianValidation}
                        styles={styles}
                    />
                }
                <FormInput
                    inputChange={phoneNumberDispatch}
                    label="phone"
                    inputKey="phone"
                    inputType="tel"
                    currentValue={formData.phone}
                    selectedKey={formData.focusedInput}
                    required={true}
                    validation={phoneValidation}
                    styles={styles}
                />
                <FormInput
                    inputChange={dispatch}
                    label="password"
                    inputKey="password"
                    inputType="password"
                    currentValue={formData.password}
                    selectedKey={formData.focusedInput}
                    required={true}
                    styles={styles}
                />
                <input
                    className={isDisabled ? `${styles.submit} ${styles.disabled}` : `${styles.submit}`}
                    type="submit"
                    value="Create Account"
                    disabled={isDisabled}
                />
            </form>
        </section>
    );
}