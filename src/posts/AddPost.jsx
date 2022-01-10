import React , {useEffect, useState} from 'react';
import { useParams, useNavigate} from 'react-router';
import style from '../style.module.css'
import axios from 'axios'
import { setPostService, updatePostService } from '../services/PostSErvice';


const AddPost = ()=>{

    const {postId} = useParams();
    const navigate = useNavigate();
    const [users , setUsers] = useState([])
    const [data , setData] = useState({
        userId: "" ,
        id : "",
        title : "" ,
        body : "" 
    })

    const handleAddPost = (e)=>{
        e.preventDefault();
        if (!postId) {
            setPostService(data);
        }else{
            updatePostService(data , postId);
        }
    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            setUsers(res.data);
        }).catch(err=>{
            console.log(err);
        })
        if (postId) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res=>{
                setData(res.data)
            });
        }
    },[])



    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
                {postId ? "ویرایش پست" : "افزودن پست" }
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form onSubmit={handleAddPost} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className="form-label">کاربر</label>
                        <select className="form-control" value={data.userId} onChange={(e)=>setData({...data , userId:e.target.value})}>
                            <option  value="">کاربر مورد نظر را انتخاب کنید</option>
                            {users.map(u=>(
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">آی دی کاربر</label>
                        <input type="text" className="form-control" value={data.userId} onChange={(e)=>setData({...data , userId:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">عنوان</label>
                        <input type="text" className="form-control" value={data.title} onChange={(e)=>setData({...data , title:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">متن اصلی</label>
                        <textarea rows={5} type="email" className="form-control" value={data.body} onChange={(e)=>setData({...data , body:e.target.value})}></textarea>
                    </div>                    
                    <div className="col-12 text-start">
                        <button type="button" className="btn btn-danger ms-2"
                        onClick={()=>navigate(-1)}
                        >بازگشت</button>
                        <button type="submit" className="btn btn-primary" >
                        {postId ? "ویرایش " : "افزودن " }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPost;