import React from 'react';

//useSelector:- Allows you to extract data from the Redux store state, using a selector function.

import {useSelector, useDispatch} from 'react-redux';

import {increment, decrement} from './actions';


function App (){

    //grabs a piece of the state.. which in this case is combine using multiple files using the combineReducers function
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
        <h1> bro why</h1>
        <p> and your state from redux is {counter}</p>

        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>

        {isLogged? <p> show stuff? based on isLogged state, which is coming from the loggedReducer ^_^</p> : ""}
        
        </React.Fragment>
    )
}


export default App;