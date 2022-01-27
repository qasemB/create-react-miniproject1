import React from 'react';
import { connect } from 'react-redux';
import { buyApple, buyOrange } from '../redux/fruit/fruitAction';

const Mystore = ({apple , orange , buyApple , buyOrange}) => {
    return (
        <div>
            <h5 className='text-center mt-2'>تعداد سیب ها : {apple}</h5>
            <h5 className='text-center mt-2'>تعداد سیب ها : {orange}</h5>
            <div className='text-center mt-3'>
                <button className='btn btn-success mx-3' onClick={buyApple}>خرید سیب</button>
                <button className='btn btn-warning mx-3' onClick={buyOrange}>خرید پرتقال</button>
            </div>
        </div>
    );
}

const stateToProps = state=>{
    return{
        apple: state.apple,
        orange: state.orange
    }
}

const dispatchToProps = dispatch=>{
    return{
        buyApple: ()=>dispatch(buyApple()),
        buyOrange: ()=>dispatch(buyOrange())
    }
}

export default connect(stateToProps,dispatchToProps)(Mystore) ;
