import React , { Component, createRef }from 'react';
import PureCompo from './PureComponent';

class ParentCompo extends Component {
    
    constructor(){
        super()

        this.componentRef = createRef();
    }    

    handleChangeCompoName = ()=>{
        this.componentRef.current.handleChangeName();
    }

    render(){
        return(
            <div>
                <PureCompo ref={this.componentRef}/>
                <button className="btn btn-info" onClick={this.handleChangeCompoName} >test</button>
            </div>
        )
    }
}

export default ParentCompo;