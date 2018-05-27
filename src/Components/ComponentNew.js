/**
 * Created by mohit.badwal on 5/24/2018.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ComponentNew.css'

class ComponentNew extends Component{

    handleClick = ()=>
    {
        this.props.clickHandler(this.props.input)
    };

    render()
    {
        return(
            <div className="component_text">
                <p onClick={this.handleClick}>{this.props.input}</p>
            </div>
        );
    }
}
ComponentNew.propTypes = {
    input: PropTypes.string,
    clickHandler:PropTypes.func
};
export default ComponentNew
