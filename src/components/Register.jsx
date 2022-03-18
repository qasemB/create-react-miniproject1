import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Formikcontrol from './formikComponents/FormikControl';


const initialValues ={
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
    auth_mode: "mobile",
    date: ''
}
const onSubmit = (values)=>{
    console.log(values);
    alert("ok")
}
const validationSchema = Yup.object({
    email:Yup.string().when('auth_mode' , {
        is: "email",
        then: Yup.string().required('لطفا این قسمت را پر کنید').email("لطفا قالب ایمیل را رعایت کنید مثال"),
    }),
    mobile:Yup.number().when('auth_mode' , {
        is: "mobile",
        then: Yup.number().required('لطفا این قسمت را پر کنید'),
    }),
    password: Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ , 'حد اقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کارکترهای خاص استفاده کنید'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password') , ''] , 'با رمز عبور مطابقت ندارد')
        .required('لطفا این قسمت را پر کنید'),
    user_name: Yup.string().required('لطفا این قسمت را پر کنید').matches(/^[0-9a-zA-Z]+$/, 'فقط از حروف لاتین و اعداد استفاده کنید'),
    first_name: Yup.string().matches(/^[ابپتثجچهخدذرزسشصظطضعغفقک@-_.:گلمنوهیژئي\s0-9a-zA-Z]+$/, 'فقط از حروف فارسی و لاتین و اعداد و @ : - _ . استفاده کنید'),
    last_name: Yup.string().matches(/^[ابپتثجچهخدذرزسشصظطضعغفقک@-_.:گلمنوهیژئي\s0-9a-zA-Z]+$/, 'فقط از حروف فارسی و لاتین و اعداد و @ : - _ . استفاده کنید'),
    date: Yup.string().required('لطفا این قسمت را پر کنید')
})

const authModeValues = [
    {id:"mobile" , value: "موبایل"},
    {id:"email" , value: "ایمیل"},
] 

const handleSetDate =(value)=>{
    console.log(value);
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
                                        name="user_name"
                                        icon="fa fa-user"
                                        label="نام کاربری"
                                        />
                                        <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="first_name"
                                        icon="fa fa-user"
                                        label="نام "
                                        />
                                        <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="last_name"
                                        icon="fa fa-user"
                                        label="نام خانوادگی"
                                        />
                                        <Formikcontrol
                                        formik={formik}
                                        control="radio"
                                        name="auth_mode"
                                        label="نوع اعتبار سنجی"
                                        options={authModeValues}
                                        />

                                        {
                                            formik.values.auth_mode=="mobile" ? (
                                                <Formikcontrol
                                                formik={formik}
                                                control="input"
                                                type="number"
                                                name="mobile"
                                                icon="fa fa-phone"
                                                label="شماره موبایل"
                                                />                                            
                                            ) : (
                                                <Formikcontrol
                                                formik={formik}
                                                control="input"
                                                type="email"
                                                name="email"
                                                icon="fa fa-envelope"
                                                label="ایمیل"
                                                />
                                            )
                                        }

                                        





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
                                        name="confirm_password"
                                        icon="fa fa-lock"
                                        label="تایید رمز عبور"
                                        />

                                        
                                        <Formikcontrol
                                        formik={formik}
                                        control="date"
                                        name="date"
                                        icon="fa fa-calendar"
                                        label="تاریخ تولد"
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
