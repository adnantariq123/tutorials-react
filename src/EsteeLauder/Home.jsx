import React, { Component } from 'react';

import Box from "./Box";

class Home extends Component {
    // state = {  }
    
    // because the method fml is a part of the class 'object' to call ir or to run it we need to have {} along with the 'this' keyword
    // so to ruin it should look like : {this.fml()} 
    fml = () => {
      console.log(this.props.MakeUp.length);
    };


    render() { 
        return (
          
<div className="container-fluid">
  <div className="row">
    {/* <div className="col-12 d-flex align-items-stretch"> */}

        {this.fml()} 
            {this.props.MakeUp.map(xyz => (
                    
                    <Box key={xyz._id}
                    price={xyz.price}
                    imger={xyz.picture}
                    name={xyz.name}
                    > </Box>
                
                ))}

                {/* </div> */}
            </div>
        </div>


          );
    }
}
 
export default Home;