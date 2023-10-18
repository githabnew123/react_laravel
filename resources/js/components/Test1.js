import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ApiTest from "./ApiTest.js";
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from "axios";

class Test1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "John",
            age : 24
        };
    }
    changeAge = () =>{
        this.setState({age: 25});
    }
    render(){
        return <div>
            <h1>Name : {this.state.name}</h1>
        <p>
          Age : {this.state.age}
        </p>
        <button
          type="button"
          onClick={this.changeAge}
        >Change Age</button>
        <ApiTest/>
        </div>
    }
}

export default Test1;

if (document.getElementById('testing1')) {
    ReactDOM.render(<Test1 />, document.getElementById('testing1'));
}