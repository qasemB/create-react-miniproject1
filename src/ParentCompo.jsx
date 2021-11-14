import React , { Component }from 'react';
import PureCompo from './PureComponent';

class ParentCompo extends Component {

    constructor(){
        super()
        this.state = {
            name : "qasem"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : "qasem"+new Date()
            })
        }, 1000);
    }

    render(){
        console.log("------------- parent ---------------");
        return(
            <div>
                <PureCompo name={this.state.name}/>
            </div>
        )
    }
}

export default ParentCompo;