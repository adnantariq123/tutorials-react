import React, { Component } from 'react';

import Box from "./Box";

class Home extends Component {
    // state = {  }
    render() { 
        return (

<div className="container-fluid">
  <div className="row">
    <div className="col-12 d-flex align-items-stretch">


            {this.props.MakeUp.map(xyz => (
                    
                    <Box key={xyz._id}
                    price={xyz.price}
                    // imger={xyz.picture}
                    name={xyz.name}
                    > </Box>
                
                ))} 

                </div>
            </div>
        </div>


          );
    }
}
 
export default Home;