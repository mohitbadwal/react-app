/**
 * Created by mohit.badwal on 5/24/2018.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SnackBar.css'

class SnackBar extends Component{
    constructor(props){
        super(props);

    }
    //
    // handleClick = (Text) =>{
    //   this.setState(function () {
    //      return {
    //          text:Text,
    //          state:"show"
    //      };
    //   });
    // };

    render(){
        const className = ["snackbar",this.props.state];
        const text = this.props.text.length > 100?this.props.text.substring(0,100)+"...":this.props.text;
        return(

            <div className={className.join(" ").trim()} ><p>{text}</p></div>
        );
    }
}

SnackBar.propTypes = {
    state: PropTypes.string,
    text:PropTypes.string
};
export default SnackBar


