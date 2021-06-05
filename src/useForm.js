import {useState} from 'react';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    function formattedNumber (myNumber) { return ("0" + myNumber).slice(-2); }

    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.name]: formattedNumber(e.target.value)
            })
        }
    ]
}