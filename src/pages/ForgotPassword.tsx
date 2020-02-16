import React, {useState, useMemo} from 'react';

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ForgotPassword = () => {

    const [failingForms, setFailingForms] = useState<string[]>([]);

    const isDisabled = !!failingForms.length;

    let emailValidation = useMemo(() => {
        return {
            pattern: emailPattern,
            failedMesg: "Please provide a valid email.",
            changeInvalidFormsList: setFailingForms
        }
    }, []);

    return(
        <section>
            <h1>Forgot your Password?</h1>
            <p>Enter your email in the field below.</p>
            

        </section>
    )
}

