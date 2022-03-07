import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import Personalerror from '../Personalerror';

const Input = (props) => {
    const {name,type,label} = props;
    return (
        <div className="mb-2">
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField type={type} className="form-control" id={name} name={name}/>
            <ErrorMessage name={name}component={Personalerror} />
        </div>
    );
}

export default Input;
