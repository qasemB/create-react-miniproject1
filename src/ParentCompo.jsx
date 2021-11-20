import React , { Component, createRef }from 'react';
import Fcomponent from './Fcomponent';
import PureCompo from './PureComponent';

class ParentCompo extends Component {

    constructor(){
        super()

        this.myInput = createRef();
    }  

    componentDidMount(){
        this.myInput.current.focus();
    }

    render(){
        return(
            <div>
                {/* <PureCompo/> */}
                <Fcomponent ref={this.myInput}/>
            </div>
        )
    }
}

export default ParentCompo;