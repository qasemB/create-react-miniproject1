import React , {useState} from 'react';
import { useParams , Outlet, useNavigate, useLocation } from 'react-router';
import style from '../style.module.css'
import axios from 'axios'

const AddUser = ()=>{

    const {userId} = useParams();
    const params = useLocation();
    const navigate = useNavigate();

    const [data , setData] = useState({
        name: "" ,
        username : "",
        email : "" ,
        address : {
            street: "",
            city: "",
            suite: "",
            zipcode: ""
        }
    })

    const handleAddUser = (e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users' , data).then(res=>{
            console.log(res);
        });
    }



    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
                {userId ? "ویرایش کاربر" : "افزودن کاربر" }
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form onSubmit={handleAddUser} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className="form-label">نام و نام خانوادگی</label>
                        <input type="text" className="form-control" value={data.name} onChange={(e)=>setData({...data , name:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">نام کاربری</label>
                        <input type="text" className="form-control" value={data.username} onChange={(e)=>setData({...data , username:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">ایمیل</label>
                        <input type="email" className="form-control" value={data.email} onChange={(e)=>setData({...data , email:e.target.value})}/>
                    </div>
                    <div className="mb-3 row">
                        <label className="form-label">آدرس</label>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="شهر" value={data.address.city} onChange={(e)=>setData({...data , address:{...data.address , city:e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="خیابان" value={data.address.street} onChange={(e)=>setData({...data , address:{...data.address , street:e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="ادامه آدرس" value={data.address.suite} onChange={(e)=>setData({...data , address:{...data.address , suite:e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className="form-control" placeholder="کد پستی" value={data.address.zipcode} onChange={(e)=>setData({...data , address:{...data.address , zipcode:e.target.value}})}/>
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