import React, { Component } from 'react';

class Box extends Component {
    state = {  }
    render() { 
        return (
        
        <div className="col-4 d-flex align-items-stretch">
            {/* <div className="card"> */}
                <div className="row no-gutters">
                    <div className="Box">
                        <img src={this.props.imger} alt={this.props.name} />
                        <p className="name">{this.props.name}</p>
                        <p className="price">$ {this.props.price}</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
        );
    }
}
 
export default Box;