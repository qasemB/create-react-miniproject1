import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Formikcontrol from './formikComponents/FormikControl';


const initialValues ={
    email: "",
    password: ""
}
const onSubmit = (values)=>{
    console.log(values);
}
const validationSchema = Yup.object({
    email:Yup.string().required('لطفا این قسمت را پر کنید').email("لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb"),
    password: Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ , 'حد اقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کارکترهای خاص استفاده کنید'),
})

const Login = () => {
    return (
        <div class="limiter">
            <div class="container-login100">
                <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                    {
                        formik=>{
                            console.log(formik);
                            return(                                
                                <div class="wrap-login100">
                                    <Form class="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
                                        <span class="login100-form-title">
                                            ورود اعضا
                                        </span>

                                        <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="email"
                                        name="email"
                                        icon="fa fa-envelope"
                                        label="ایمیل"
                                        />

                                        <Formikcontrol
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        icon="fa fa-lock"
                                        label="رمز عبور"
                                        />
                                        
                                        <div class="container-login100-form-btn">
                                            <button class="login100-form-btn">
                                                ورود
                                            </button>
                                        </div>
                                        <div class="text-center p-t-12 p-b-45">
                                            <a class="txt2" href="#">
                                                فراموش کردید؟
                                            </a>
                                        </div>
                                        <div class="text-center pos-absolute m-auto w-100 bottom-0">
                                            <a class="txt2" href="#">
                                                ثبت نام
                                                <i class="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </Form>
                                    <div class="login100-pic js-tilt" data-tilt>
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

export default Login;
