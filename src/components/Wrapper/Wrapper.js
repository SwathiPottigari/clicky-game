import React,{Component} from "react";
import "./Wrapper.css";

function Wrapper(props){
    return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;