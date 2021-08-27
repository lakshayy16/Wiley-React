import React,{Component} from 'react';

class Namaste extends Component{
    constructor(props){
        super(props);
        this.state={msg: 'Guest'}
    }
    
    changeName = () =>{
        this.setState({msg : param}),
        ()=>console.log('Call back '+this.state.msg)
    }
    
    changeNameTo = param =>{
        this.setState({
            msg:param
        })
    }

    render(){
        return(<div><h1> Namaste {this.state.msg}</h1>
            <button onClick= {()=>this.changeName('Lakshay')}> Change name </button>
            </div>);
    }
}

export default Namaste;