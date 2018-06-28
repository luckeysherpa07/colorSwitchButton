import React from 'react';

class Box extends React.Component{
    render(){
        return(
            <div>
                <button style = {buttonStyle} onClick={()=>this.props.handleClick()}>Change Color</button>
            </div>
        )
    }
}

const buttonStyle = {
    margin: "auto",
    width: "200px",
}

export default Box;