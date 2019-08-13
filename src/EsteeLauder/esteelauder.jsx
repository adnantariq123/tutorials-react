import React, { Component } from 'react';

import filterData from "./filterData";
import Menu from "./Menu";
import Home from "./Home";




class App extends Component {
    state = {  
        MakeUp: filterData("", 20)
    }

    handleSearchChange(e) {
        this.setState({
            MakeUp: filterData(e,20)
        });
        console.log("event is :" + e);
    };

 

    render() { 
        return (

            <React.Fragment>
                <Menu textChange={(e)=> this.handleSearchChange(e)}/>
                <Home MakeUp={this.state.MakeUp}></Home>
            </React.Fragment>
        );
    }
}
 
export default App;