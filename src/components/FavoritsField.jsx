import { ErrorMessage, Field } from 'formik';
import React from 'react';
import Personalerror from './Personalerror';

const FavoritsField = (props) => {
    const {form, push, remove} = props;
    const {favorits} = form.values;
    return(
        <>
            <i className='fas fa-plus text-success mx-3 pointer' onClick={()=>push('')}></i>
            <label htmlFor="telePhone" className="form-label">علایق</label>
            {favorits.map((f,i)=>(
                <div key={i} className="position-relative">
                    <Field type="text" className="form-control" name={`favorits[${i}]`}/>
                    {
                        favorits.length > 1 ? (
                            <i className='fas fa-minus-circle text-danger mx-1 pointer delete_icon' onClick={()=>remove(i)}></i>
                        ) : null
                    }
                    <ErrorMessage name={`favorits[${i}]`} component={Personalerror}/>
                </div>

            ))}
        </>
    )
}

export default FavoritsField;
