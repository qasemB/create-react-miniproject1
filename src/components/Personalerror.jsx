import React from 'react';

const Personalerror = ({children}) => {
    return (
        <small className='d-block text-center text-danger'>
            {children}
        </small>
    );
}

export default Personalerror;
