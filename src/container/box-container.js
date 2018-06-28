import React from 'react';
import Box from './../component/box';
import {connect} from 'react-redux';
import * as actionCreator from "./../action/index";

class BoxCon extends React.Component{
    render(){
        return (
            <div style = {{
                margin: "auto",
                marginTop: "200px",
                width: "500px",
                height: "300px",
                align: "center",
                backgroundColor: this.props.color} }>
                {console.log(this.props.color)}
                <Box handleClick={this.props.loadColor}></Box>
            </div>
        )
    }
}

const boxContainer = {
    backgroundColor: "blue",
}

const mapStateToProp = (state) => {
    return state;
}

export default connect(mapStateToProp, actionCreator)(BoxCon);