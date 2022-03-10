import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';
import Personalerror from '../Personalerror';

const Checkbox = (props) => {
    const {name,label,options} = props;
    return (
        <div className="mb-2">
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField className="form-control" id={name} name={name}>
                {({field})=>{
                    console.log(field);
                    return options.map(o=>(
                        <Fragment key={o.id}>
                            <input 
                            className='form-check-input me-4'
                            type="checkbox" 
                            id={o.value}
                            {...field}
                            value={o.value}
                            checked={field.value.includes(o.value)}
                            />
                            <label htmlFor={o.value} className="mx-1 ms-4">{o.value}</label>
                        </Fragment>
                    ))
                }}
            </FastField>
            <ErrorMessage name={name}component={Personalerror} />
        </div>
    );
}

export default Checkbox;