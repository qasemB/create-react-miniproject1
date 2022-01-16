import React from 'react';
import useTitle from '../hooks/useTitle';
import style from '../style.module.css'

const Gallery = ()=>{

    useTitle("گالری ها")


    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت گالری ها</h4>
        </div>
    )

}

export default Gallery;