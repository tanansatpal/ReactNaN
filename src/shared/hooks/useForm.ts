import {SyntheticEvent, useState} from "react";

interface HTMLInputEvent extends SyntheticEvent {
    target: HTMLInputElement & EventTarget;
}

const useForm = (initialValues: any, callback: Function) => {
    const [values, setValues] = useState(initialValues);

    const handleSubmit = (event: SyntheticEvent) => {
        if (event) event.preventDefault();
        callback()
    };

    const handleChange = (event: HTMLInputEvent) => {
        event.persist();
        setValues((values: any) => ({...values, [event.target.name]: event.target.value}))
    };

    return {
        handleSubmit,
        handleChange,
        values
    }

};

export default useForm;
