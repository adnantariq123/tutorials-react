import React, { Component } from 'react';
import '../App.css';

import {connect} from 'react-redux';


class App extends Component {


//   state = {
//     age:21
//   }

// onAgeUp =() => {
//   this.setState({
//     ...this.state,
//     age:++this.state.age
//   })
// }

// onAgeDown =() => {
//   this.setState({
//     ...this.state,
//     age:--this.state.age
//   })
// }


  render() {
    return (
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <hr/>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age:state.age
  }
}

const mapDispachToProps = (dispach) => {
  return{
    onAgeUp: () => dispach({type:'Age_UP'}),
    onAgeDown: () => dispach({type:'Age_DOWN'})
  }
}

export default connect(mapStateToProps, mapDispachToProps) (App);
