import React, { memo } from 'react';

const Countbutton = (props) => {
    console.log("دکمه "+props.title)
    return (
        <div className='text-center mt-3'>
            <button className='btn btn-info' onClick={props.handleClick}>{`افزایش ${props.title}`}</button>
        </div>
    );
}

export default memo(Countbutton);
