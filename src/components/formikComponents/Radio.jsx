import React, { Fragment } from 'react';
import { ErrorMessage, FastField } from 'formik';
// import Personalerror from '../Personalerror';

const Radio = (props) => {
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
                            className='form-check-input mx-2'
                            type="radio" 
                            id={o.id}
                            {...field}
                            value={o.id}
                            checked={field.value == o.id}
                            />
                            <label htmlFor={o.id} className="mx-1 mx-4">{o.value}</label>
                        </Fragment>
                    ))
                }}
            </FastField>
            {/* <ErrorMessage name={name}component={Personalerror} /> */}
        </div>
    );
}

export default Radio;