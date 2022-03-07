import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import Personalerror from '../Personalerror';

const Texarea = (props) => {
    const {name,label} = props;
    return (
        <div className="mb-2">
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField as="textarea" className="form-control" id={name} name={name}/>
            <ErrorMessage name={name}component={Personalerror} />
        </div>
    );
}

export default Texarea;