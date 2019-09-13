import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {increment, decrement} from './actions';


function App (){
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