import { FastField } from 'formik';
import React from 'react';

const Input = ({formik,type,name,icon,label}) => {
    return (
        <div 
        className={`wrap-input100 validate-input ${formik.errors[name] && formik.touched[name] ? 'alert-validate' : null}`}
        data-validate = {formik.errors[name]}
        >
            <FastField className="input100 " type={type} name={name} placeholder={label} />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
                <i className={icon}></i>
            </span>
        </div>
    );
}

export default Input;
