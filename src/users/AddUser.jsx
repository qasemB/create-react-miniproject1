import React from 'react';
import { useParams , Outlet } from 'react-router';
import style from '../style.module.css'

const AddUser = ()=>{

    const {userId} = useParams();

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
                {userId ? "ویرایش کاربر" : "افزودن کاربر" }
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">نام و نام خانوادگی</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">نام کاربری</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">ایمیل</label>
                        <input type="email" class="form-control"/>
                    </div>
                    <div class="mb-3 row">
                        <label for="exampleInputEmail1" class="form-label">آدرس</label>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="شهر"/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="خیابان"/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="ادامه آدرس"/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" class="form-control" placeholder="کد پستی"/>
                        </div>
                    </div>
                    
                    <div className="col-12 text-start">
                        <button type="button" class="btn btn-danger ms-2">بازگشت</button>
                        <button type="submit" class="btn btn-primary" >
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