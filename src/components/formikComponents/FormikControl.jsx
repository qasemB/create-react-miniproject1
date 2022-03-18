import React from 'react';
import Input from './Input';
import Radio from './Radio';
import Date from './Date';

const Formikcontrol = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'radio':
            return <Radio {...props}/>
        case 'date':
            return <Date {...props}/>
        default:
            return null
    }
}

export default Formikcontrol;