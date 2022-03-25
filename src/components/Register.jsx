import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Formikcontrol from './formikComponents/FormikControl';
import axios from 'axios';


const initialValues ={
    phone: "",
    password: "",
    c_password: "",
}
const onSubmit = (values)=>{
    console.log(values);

    axios.post('http://authservice.azhadev.ir/api/auth/register' , values)
        .then(res=>{
            console.log(res);

            localStorage.setItem("token" , res.data.token);
        })
    
}
const validationSchema = Yup.object({
    phone:Yup.number().required('لطفا این قسمت را پر کنید'),
    password: Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ , 'حد اقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کارکترهای خاص استفاده کنید'),
    c_password: Yup.string()
        .oneOf([Yup.ref('password') , ''] , 'با رمز عبور مطابقت ندارد')
        .required('لطفا این قسمت را پر کنید')
})

const hendleGetUserData = ()=>{
    axios.get('http://authservice.azhadev.ir/api/auth/user' , {
        headers:{
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res=>{
        console.log(res);
    })
}

const Register = () => {
    return (
        <div className="limiter">
            <div className="container-login100">
                <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                    {
                        formik=>{
                            console.log(formik);
                            return(                                
                                <div className="wrap-login100">
                                    <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
                                        <span className="login100-form-title">
                                            ثبت نام اعضا
                                        </span>

                                        <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="phone"
                                        icon="fa fa-mobile"
                                        label="شماره تلفن همراه"
                                        /> 
                                        <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        icon="fa fa-lock"
                                        label="رمز عبور"
                                        />
                                        <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="c_password"
                                        icon="fa fa-lock"
                                        label="تایید رمز عبور"
                                        />
                                        
                                        <div className="container-login100-form-btn">
                                            <button className="login100-form-btn">
                                                ثبت نام
                                            </button>
                                        </div>
                                        <div className="text-center p-t-12 p-b-45">
                                            <a className="txt2" href="#">
                                                قبلا ثبت نام کرده ام
                                            </a>
                                        </div>

                                        <div className='w-100 text-center'>
                                            <button className='btn btn-info' onClick={hendleGetUserData}>دریافت اطلاعات کاربر</button>
                                        </div>
                                    </Form>
                                    <div className="login100-pic js-tilt" data-tilt>
                                        <img src="/auth/images/img-01.png" alt="IMG"/>
                                    </div>
                                </div>
                            )
                        }
                    }
                </Formik>
            </div>
        </div>
    );
}

export default Register;
