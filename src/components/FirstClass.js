import React,{Component} from 'react';

class FirstClass extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        return(<h1> Hello {this.props.name} you are the new {this.props.desig} in Class.</h1>)
    }
}

export default FirstClass;