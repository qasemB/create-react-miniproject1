import React from 'react';
import { ErrorMessage, FastField, Field, Form, Formik, FieldArray, useFormik } from 'formik'
import * as Yup from 'yup'
import Personalerror from './Personalerror';
import FavoritsField from './FavoritsField';

const initialValues ={
    name: '',
    email: '',
    password: '',
    bio: '',
    address:{
        city: '',
        postalCode:''
    },
    phone:['' , ''],
    favorits:['']
}
const onSubmit = values=>{
    console.log(values);
}
const validate = values=>{
    let errors = {}
    if (!values.name) {
        errors.name = "لطفا این قسمت را پر کنید"
    }
    if (!values.email) {
        errors.email = "لطفا این قسمت را پر کنید"
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb"
    }
    if (!values.password) {
        errors.password = "لطفا این قسمت را پر کنید"
    }
    return errors;
}
const validationSchema = Yup.object({
    name: Yup.string().required('لطفا این قسمت را پر کنید'),
    email:Yup.string().required('لطفا این قسمت را پر کنید').email("لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb"),
    password: Yup.string().required('لطفا این قسمت را پر کنید').min(8 , 'حد اقل 8 کارکتر وارد کنید'),
    address: Yup.object({
        city:Yup.string().required('لطفا این قسمت را پر کنید'),
        postalCode:Yup.string().required('لطفا این قسمت را پر کنید'),
    }),
    phone: Yup.array().of(Yup.string().required('لطفا این قسمت را پر کنید')),
    favorits: Yup.array().of(Yup.string().required('لطفا این قسمت را پر کنید'))
})

const validateBio = value=>{
    let error;
    if (!value) {
        error = 'ورود این فیلد اجباری...!'
    }else if (!/^[\u0600-\u06FF\s0-9a-zA-Z]+$/.test(value)) {
        error = 'لطفا قالب نوشتاری را رعایت کنید...!'
    }
    return error;
}


const Registerform = () => {

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // validateOnBlur={false}
        // validateOnChange={false}
        >


            {formik=>{
                console.log(formik);
                return (
                    <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
                        <div className="row w-100 justify-content-center align-items-center">
                            <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-2 px-3'>
                                <Form className='row'>
                                    <h1 className='text-center'>
                                        <i className='fas fa-user-plus text-primary'></i>
                                    </h1>
                                    <div className="mb-2">
                                        <label htmlFor="name" className="form-label">نام</label>
                                        <FastField type="text" className="form-control" id="name" name='name' placeholder="لطفا از حروف لاتین استفاده کنید"/>
                                        <ErrorMessage name='name'component={Personalerror} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label">ایمیل</label>
                                        <FastField type="email" className="form-control" id="email" name='email'/>
                                        <ErrorMessage name='email'component={Personalerror} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="password" className="form-label">رمز عبور</label>
                                        <FastField type="password" className="form-control" id="password" name='password'/>
                                        <ErrorMessage name='password'component={Personalerror} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="password" className="form-label">بیوگرافی</label>
                                        <FastField type="text" className="form-control" id="bio" name='bio' component="textarea"
                                        validate={validateBio}
                                        />
                                        <ErrorMessage name='bio' component={Personalerror}/>
                                    </div>
        
        
        
                                    <div className="mb-2 col-6">
                                        <label htmlFor="city" className="form-label">شهر</label>
                                        <FastField type="text" className="form-control" id="city" name='address.city'/>
                                        <ErrorMessage name='address.city'component={Personalerror} />
                                    </div>
                                    <div className="mb-2 col-6">
                                        <label htmlFor="postalCode" className="form-label">کد پستی</label>
                                        <FastField type="text" className="form-control" id="postalCode" name='address.postalCode'/>
                                        <ErrorMessage name='address.postalCode' component={Personalerror}/>
                                    </div>
        
        
                                    <div className="mb-2 col-6">
                                        <label htmlFor="mobilePhone" className="form-label">شماره موبایل</label>
                                        <FastField type="text" className="form-control" id="mobilePhone" name='phone[0]'/>
                                        <ErrorMessage name='phone[0]'component={Personalerror} />
                                    </div>
                                    <div className="mb-2 col-6">
                                        <label htmlFor="telePhone" className="form-label">شماره ثابت</label>
                                        <FastField type="text" className="form-control" id="telePhone" name='phone[1]'/>
                                        <ErrorMessage name='phone[1]' component={Personalerror}/>
                                    </div>
        
                                    <div className="mb-2">
                                        <FieldArray type="text" className="form-control" id="favorits" name='favorits'>
                                            {props=> <FavoritsField {...props}/>}
                                        </FieldArray>
        
                                    </div>
        
                                    <button className='btn btn-info' type='button' onClick={()=>formik.validateField('bio')}>اعتبارسنجی بیوگرافی</button>
                                    <button className='btn btn-info' type='button' onClick={()=>formik.validateForm()}>اعتبارسنجی فرم</button>
        
                                    <button className='btn btn-success' type='button' onClick={()=>formik.setFieldTouched('bio')}>مشاهده بیوگرافی</button>
                                    <button className='btn btn-success' type='button' onClick={()=>formik.setTouched({
                                       name: true,
                                       email: true 
                                    })}>مشاهده فرم</button>
        
                                    <div className='text-center w-100'>
                                        <button type="submit" className="btn btn-primary">ثبت نام</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                )
            }}


        </Formik>
    );
}

export default Registerform;
