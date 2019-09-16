import React, { Component } from 'react';
import '../App.css';

//The connect() function connects a React component to a Redux store
//https://react-redux.js.org/api/connect
import {connect} from 'react-redux';


class App extends Component {

// ALL this state manuplation is NOW done in the reducer file.
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


// so the mapStateToProps, mapDispatchToProps :-If a mapStateToProps function 

//is specified, the new wrapper component will subscribe to Redux store updates.
//This means that any time the store is updated mapStateToProps will be called.

export default connect(mapStateToProps, mapDispachToProps) (App);
