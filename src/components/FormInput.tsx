import React, { useState, useEffect } from 'react';

type FormInputProps = {
    inputType: string,
    inputChange: (action: any) => void | React.Dispatch<any>,
    label: string,
    inputKey: string,
    currentValue: string,
    selectedKey: string,
    required: boolean,
    styles: { readonly [key: string]: string; },
    validation?: {
        failedMesg: string,
        pattern: RegExp,
        changeInvalidFormsList: React.Dispatch<React.SetStateAction<string[]>>;
    }
}

let checkInputValidationTimeout: ReturnType<typeof setTimeout>;

/*
Props:
        inputChange: A function or a dispatcher that handels the input value as it changes.
        label: The label of the input that is displayed to the user.
        inputKey: The key of the state object that stores the value supplied to the input.
        currentValue: The value that can be changed within the input tag.
        selectedKey: The input key that is currently in focus.
        required: Wether the input needs to be filled out before the form is submitted.
        validation: An object that contains the messagge to be displayed if the input is incorrect,
            a regex pattern to match against, and a function that adds the label of the failing input to a list in the parent.
*/

export const FormInput: React.FC<FormInputProps> = (
    {
        inputChange,
        label,
        inputKey,
        inputType,
        currentValue,
        selectedKey,
        required,
        validation,
        styles
    }
) => {
    const [valueInvalid, setValueInvalid] = useState(false);

    //When the user is done typing, if check to see if the input is incorrect and take the appropriate action if not.
    useEffect(() => {
        if (validation !== undefined && validation.pattern !== undefined) {
            if (checkInputValidationTimeout !== undefined) {
                clearTimeout(checkInputValidationTimeout);
            }
            checkInputValidationTimeout = setTimeout(() => {
                let isValid = validation.pattern.test(currentValue);
                if (!isValid) {
                    validation.changeInvalidFormsList(prevList => {
                        if (prevList.indexOf(label) === -1) {
                            return [...prevList, label]
                        } else {
                            return prevList
                        }
                    });
                } else {
                    validation.changeInvalidFormsList(prevList => {
                        return prevList.filter(inputLabel => inputLabel !== label)
                    });
                }
                setValueInvalid(!isValid && currentValue !== "");
                
            }, 1000);
        }
    }, [validation, currentValue, required, label]);

    const changeInputData = (e: React.FormEvent<HTMLInputElement>): void => {
        setValueInvalid(false);
        const action = {
            type: "UPDATEFORM",
            value: e.currentTarget.value,
            formDataKey: inputKey
        }
        inputChange(action);
    }

    const changeInputFocus = () => {
        const action = {
            type: "FOCUS",
            value: inputKey !== selectedKey ? inputKey : "",
        }
        inputChange(action);
    }
    return (
        <div className={styles.form_input_wrapper}>
            {(validation !== undefined && valueInvalid) &&
                <span>{validation.failedMesg}</span>
            }
            <div
                className={`${styles.input_container} ${inputKey === selectedKey ? styles.focused_input : ""} ${valueInvalid ? styles.invalid_input_value : ""}`}>
                <label className={required ? styles.required_input : ""}>{label}</label>
                <input
                    onFocus={changeInputFocus}
                    onChange={changeInputData}
                    type={inputType}
                    value={currentValue}
                    onBlur={changeInputFocus}
                />
            </div>
        </div>
    );
}