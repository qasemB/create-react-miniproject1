import { FastField } from 'formik';
import React from 'react';

const File = ({formik,name,icon,label}) => {
    return (
        <div 
        className={`wrap-input100 validate-input ${formik.errors[name] && formik.touched[name] ? 'alert-validate' : null}`}
        data-validate = {formik.errors[name]}
        >

            <input type="text" className="input100" placeholder={label} 
            value={formik.values[name] ? formik.values[name].name : ""} onChange={()=>null}/>

            <input type="file" name={name} className="input_file"
            onChange={e=>{
                formik.setFieldValue(name , e.target.files[0])
            }}
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
                <i className={icon}></i>
            </span>
        </div>
    );
}

export default File;
