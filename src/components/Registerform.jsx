import React from 'react';
import { useFormik } from 'formik'

const Registerform = () => {
    const formik = useFormik({
        initialValues:{
            name: 'qasem',
            email: '',
            password: '',
        },
        onSubmit: values=>{
            console.log(values);
        }
    })

    return (
        <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
            <div className="row w-100 justify-content-center align-items-center">
                <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                    <form onSubmit={formik.handleSubmit}>
                        <h1 className='text-center'>
                            <i className='fas fa-user-plus text-primary'></i>
                        </h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">نام</label>
                            <input type="text" className="form-control" id="name" name='name'
                            value={formik.values.name} onChange={formik.handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">ایمیل</label>
                            <input type="email" className="form-control" id="email" name='email'
                            value={formik.values.email} onChange={formik.handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">رمز عبور</label>
                            <input type="password" className="form-control" id="password" name='password'
                            value={formik.values.password} onChange={formik.handleChange}
                            />
                        </div>
                        <div className='text-center w-100'>
                            <button type="submit" className="btn btn-primary">ثبت نام</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registerform;
