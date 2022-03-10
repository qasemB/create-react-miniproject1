import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';

const Formikcontrol = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'textarea':
            return <Textarea {...props}/>
        case 'select':
            return <Select {...props}/>
        case 'radio':
            return <Radio {...props}/>
        case 'checkbox':
            return <Checkbox {...props}/>
        default:
            break;
    }
}

export default Formikcontrol;
