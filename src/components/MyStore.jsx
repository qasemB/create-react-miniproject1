import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { buySandwich } from '../redux/food/foodAction';
import { buyApple, buyOrange } from '../redux/fruit/fruitAction';

const Mystore = ({sandwich1 , buySandwich1}) => {

    const [itemCount , setItemCount] = useState({
        apple: 1,
        orange: 1,
        sandwich: 1
    })

    const {apple , orange} = useSelector((state)=>state.fruit)
    // const {sandwich} = useSelector((state)=>state.food)
    const dispatch = useDispatch()
    return (
        <div>
            <h5 className='text-center mt-2'>تعداد سیب ها : {apple}</h5>
            <h5 className='text-center mt-2'>تعداد سیب ها : {orange}</h5>
            <h5 className='text-center mt-2'>تعداد ساندویچ ها : {sandwich1}</h5>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-4 col-lg-2'>
                    <div className="input-group mb-3 dir_ltr">
                        <input type="number" class="form-control" value={itemCount.apple} 
                        onChange={(e)=>setItemCount({...itemCount , apple: e.target.value})}/>
                        <button className='input-group-text btn btn-success' onClick={()=>dispatch(buyApple(itemCount.apple))}>خرید سیب ({itemCount.apple})</button>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-2'>
                    <div className="input-group mb-3 dir_ltr">
                        <input type="number" class="form-control" value={itemCount.orange} 
                        onChange={(e)=>setItemCount({...itemCount , orange: e.target.value})}/>
                        <button className='input-group-text btn btn-warning' onClick={()=>dispatch(buyOrange(itemCount.orange))}>خرید پرتقال ({itemCount.orange})</button>
                </div>
                </div>
                <div className='col-12 col-md-4 col-lg-2'>
                    <div className="input-group mb-3 dir_ltr">
                        <input type="number" class="form-control" value={itemCount.sandwich} 
                        onChange={(e)=>setItemCount({...itemCount , sandwich: e.target.value})}/>
                        <button className='input-group-text btn btn-info' onClick={()=>dispatch(buySandwich1(itemCount.sandwich))}>خرید ساندویچ ({itemCount.sandwich})</button>
                </div>
                </div>
            </div> 
        </div>
    );
}

const stateToProps = state=>{
    return{
        sandwich1: state.food.sandwich
    }
}

const dispatchToProps = dispatch=>{
    return{
        buySandwich1: (count)=>dispatch(buySandwich(count))
    }
}


export default connect(stateToProps, dispatchToProps)(Mystore)  ;
