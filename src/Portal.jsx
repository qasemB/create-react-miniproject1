import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';

const Portal = ()=>{
    return createPortal(
        <div className='modal_base'>
            <div className='modal_box'>
                ری اکت پرتال
            </div>
        </div> ,
        document.getElementById('portal-root')
    )
}

export default Portal;