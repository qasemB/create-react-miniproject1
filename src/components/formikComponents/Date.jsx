import { FastField } from 'formik';
import jMoment from 'moment-jalaali';
import React, { useEffect, useState } from 'react';
const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const months = [
    {id: 1 , value: "فروردین"},
    {id: 2 , value: "اردیبهشت"},
    {id: 3 , value: "خرداد"},
    {id: 4 , value: "تیر"},
    {id: 5 , value: "مرداد"},
    {id: 6 , value: "شهریور"},
    {id: 7 , value: "مهر"},
    {id: 8 , value: "آبان"},
    {id: 9 , value: "آذر"},
    {id: 10 , value: "دی"},
    {id: 11 , value: "بهمن"},
    {id: 12 , value: "اسفند"},
]

const Input = ({formik,name,icon,label}) => {

    const [day , setDay] = useState();
    const [month , setMonth] = useState();
    const [year , setYear] = useState();
    const [years , setYears] = useState([])
    const [showConfig , setShowConfig] = useState(false)

    useEffect(()=>{
        let now = jMoment();
        setDay(now.jDate());
        setMonth(now.jMonth());
        setYear(now.jYear());
    } , [])

    const handleShowDateConfig = ()=>{
        for (let index = parseInt(year)-100; index <= parseInt(year); index++) {
            setYears((oldYears)=>{
                return [...oldYears , index]
            });           
        }  
        setShowConfig(true)
    }
    
    const handleSetInputDate = (e)=>{
        e.stopPropagation()
        formik.setValues({
            ...formik.values,
            [name]: `${day} / ${month} / ${year}` 
        })
        setShowConfig(false)
    }



    return (
        <div 
        className={`wrap-input100 validate-input ${formik.errors[name] && formik.touched[name] ? 'alert-validate' : null}`}
        data-validate = {formik.errors[name]}
        >

            <span onClick={handleShowDateConfig}>
                <FastField className="input100 " type="text" name={name} placeholder={label} disabled/>
            </span>
            
            {
                showConfig ? (
                    <div className='datePicker row w-100 m-0 p-0'>
                        <div className='col-3 d-flex justify-content-center align-items-center  p-0'>
                            <select className='form-select' value={day} onChange={(e)=>setDay(e.target.value)}>
                                {days.map(d=>(
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-3 d-flex justify-content-center align-items-center  p-0'>
                            <select className='form-select' value={month} onChange={(e)=>setMonth(e.target.value)}>
                                {months.map(m=>(
                                    <option key={m.id} value={m.id}>{m.value}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-3 d-flex justify-content-center align-items-center  p-0'>
                            <select className='form-select' value={year} onChange={(e)=>setYear(e.target.value)}>
                                {years.map((y , i)=>(
                                    <option key={i} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-3 d-flex justify-content-center align-items-center p-0 pointer'>
                            <i className='fa fa-check text-success' onClick={handleSetInputDate}></i>
                        </div>
                    </div>
                ):null
            }





            <span className="symbol-input100">
                <i className={icon}></i>
            </span>
        </div>
    );
}

export default Input;
