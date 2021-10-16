import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'

import Hello from './Hello';
import Timer from './Timer';

// class App extends React.Component {
//     constructor(){
//         super();
//         this.state={
//             title : "سلام دوستان عزیزم"
//         }
//         // this.handleSetTitle = this.handleSetTitle.bind(this)
//     }

//     handleSetTitle = ()=>{
//         this.setState({
//             title:"به کدیاد خوش آمدید"
//         })
//     }

//     // handleSetTitle(){
//     //     this.setState({
//     //         title:"به کدیاد خوش آمدید"
//     //     })
//     // }

//     render(){
//         return (
//         <div className="main">
//             <Hello title={this.state.title}/>        
//             <Timer x={this.handleSetTitle}/>
//         </div>
//         ) 
//     }
// }

const App = ()=>{
    const [title , setTitle] = useState("سلام دوستان عزیزم");

    const handleSetTitle = ()=>{
        setTitle("به کدیاد خوش آمدید")
    }

    return (
        <div className="main">
            <Hello title={title}/>        
            <Timer handleSetTitle={handleSetTitle}/>
        </div>
    ) 
}


export default App;
