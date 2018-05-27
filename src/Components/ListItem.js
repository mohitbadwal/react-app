/**
 * Created by mohit.badwal on 5/25/2018.
 */

import React,{Component} from 'react'
import './ListItem.css'
import PropTypes from 'prop-types';
import './ariblk.ttf'

class ListItem extends Component{

    handleClick = ()=>
    {
        this.props.clickHandler(this.props.input)
    };

    render(){
        return(
            <div className="item-container" onClick={this.handleClick}>
                <div className="item-text">
                    { this.props.input2}
                </div>
                <div className="item-subText">
                    {this.props.input}
                </div>
                <div className="item-footer">

                </div>
            </div>
        );
    };
}

ListItem.propTypes={
    input: PropTypes.string,
    input2:PropTypes.string,
    clickHandler:PropTypes.func
};
export default ListItem