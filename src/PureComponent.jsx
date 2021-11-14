import React, { Component, memo, PureComponent } from 'react';

// class PureCompo extends PureComponent{
//     render(){
//         console.log("pure component");
//         return(
//             <h2 className="text-center mt-4">
//                 {"pure component :" + this.props.name}
//             </h2>
//         )
//     }
// }

const PureCompo = (props)=>{
        return(
            <h2 className="text-center mt-4">
                {"pure component :" + props.name}
            </h2>
        )
}

export default memo(PureCompo);


