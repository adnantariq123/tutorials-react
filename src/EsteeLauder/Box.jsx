import React, { Component } from 'react';

class Box extends Component {
    state = {  }
    render() { 
        return (
        <div className="card mb-3">
            <div className="row no-gutters">              
            <div className="Box">
            <img src={this.props.imger} alt={this.props.name}/>
            <p className="name">{this.props.name}</p>
            <p className="price">$ {this.props.price}</p>
            </div>
            </div>
            </div>


          );
    }
}
 
export default Box;