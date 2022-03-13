import React from 'react';
import Input from './Input';

const Formikcontrol = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        default:
            return null
    }
}

export default Formikcontrol;