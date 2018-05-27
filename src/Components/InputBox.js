/**
 * Created by mohit.badwal on 5/26/2018.
 */

import React,{ Component } from 'react'
import PropTypes from 'prop-types';

import "./InputBox.css"

class InputBox extends Component{
    constructor(props)
    {
        super(props);
        this.state =
            {
                text:""
            };
    };

    handleText=(event)=>{
        this.setState({"text":event.target.value});
    };

    handleClick=()=>{
        if(!(this.state.text.length > 0 && this.state.text.split(",").length === 2))
        {
            this.props.clickHandler(null);
            console.log(this.state.text.split(",").length)
        }
        else
            this.props.clickHandler(this.state.text)
        this.state.text = "";
    };
    render(){
        return(
            <div className="input-div">
                <button className="button-input" onClick={this.handleClick}>Enter</button>
                <input className="input-text" type="name" value={this.state.text} placeholder="Enter Data" onChange={this.handleText}/>
            </div>
        );
    }

}
InputBox.propTypes=
{
  clickHandler:PropTypes.func
};
export default InputBox