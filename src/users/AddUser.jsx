import React from 'react';
import { useParams , Outlet, useNavigate, useLocation } from 'react-router';
import style from '../style.module.css'

const AddUser = ()=>{

    const {userId} = useParams();
    const params = useLocation();

    const navigate = useNavigate();

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
                {userId ? "ویرایش کاربر" : "افزودن کاربر" }
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className="form-label">نام و نام خانوادگی</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">نام کاربری</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">ایمیل</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label">آدرس</label>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="شهر"/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="خیابان"/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="ادامه آدرس"/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="کد پستی"/>
                        </div>
                    </div>
                    
                    <div className="col-12 text-start">
                        <button type="button" className="btn btn-danger ms-2"
                        onClick={()=>navigate(-1)}
                        >بازگشت</button>
                        <button type="submit" className="btn btn-primary" >
                        {userId ? "ویرایش " : "افزودن " }
                        </button>
                    </div>
                </form>
            </div>
            {/* <Outlet/> */}
        </div>
    )
}

export default AddUser;