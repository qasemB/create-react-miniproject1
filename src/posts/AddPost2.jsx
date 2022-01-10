import React , {useEffect, useReducer, useState} from 'react';
import { useParams, useNavigate} from 'react-router';
import style from '../style.module.css'
import axios from 'axios'
import { setPostService, updatePostService } from '../services/PostSErvice';
import { init, reducer } from './postReducer';



const AddPost = ()=>{

    const {postId} = useParams();
    const navigate = useNavigate();
    const [data , dispatch] = useReducer(reducer , init);

    const handleAddPost = (e)=>{
        e.preventDefault();
        if (!postId) {
            setPostService(data.postData);
        }else{
            updatePostService(data.postData , postId);
        }
    }

    const setInputValues = (e,propName)=>{
        dispatch({
            type:"setInputValue",
            propName:propName,
            propValue:e.target.value
        })
    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            dispatch({
                type:"changeUser",
                payload:res.data
            })
        }).catch(err=>{
            console.log(err);
        })
        if (postId) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res=>{
                dispatch({
                    type:"isUpdate",
                    payload:res.data
                })
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
                        <select className="form-control" value={data.postData.userId} onChange={(e)=>setInputValues(e , "userId")}>
                            <option  value="">کاربر مورد نظر را انتخاب کنید</option>
                            {data.users.map(u=>(
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">آی دی کاربر</label>
                        <input type="text" className="form-control" value={data.postData.userId} onChange={(e)=>setInputValues(e , "userId")}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">عنوان</label>
                        <input type="text" className="form-control" value={data.postData.title} onChange={(e)=>setInputValues(e , "title")}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">متن اصلی</label>
                        <textarea rows={5} type="text" className="form-control" value={data.postData.body} onChange={(e)=>setInputValues(e , "body")}></textarea>
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