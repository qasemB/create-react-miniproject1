import React from 'react';

const Personalfield = ({field , form , meta})=>{
    console.log(field , form , meta);
    return (
        <>
            <input type="password" className="form-control" id="password" {...field}/>
            {meta.touched && meta.error ? 
                <small className='text-center d-block text-danger'>{meta.error}</small> :
                null
            }
        </>
    )
}

export default Personalfield;
