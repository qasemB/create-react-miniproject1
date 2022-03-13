import { FastField } from 'formik';
import React from 'react';

const Input = ({formik,type,name,icon,label}) => {
    return (
        <div 
        class={`wrap-input100 validate-input ${formik.errors[name] && formik.touched[name] ? 'alert-validate' : null}`}
        data-validate = {formik.errors[name]}
        >
            <FastField class="input100 " type={type} name={name} placeholder={label} />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
                <i class={icon}></i>
            </span>
        </div>
    );
}

export default Input;
