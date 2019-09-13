import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';



// If you want your app to work offline and load faster, you can change: serviceWorker.unregister();
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA





// import AppBlog from './AppBlog';
// ReactDOM.render( <AppBlog />, document.getElementById( 'root' ) );





// import App4ClassVsFunctional from './App4ClassvsFunctional';
// ReactDOM.render( <h1>Difference between Class Componenets VS Functional Componenets</h1>, document.getElementById( 'headed' ) );
// ReactDOM.render( <App4ClassVsFunctional />, document.getElementById( 'root' ) );





// import App4Redux from './reduxStyle/App4Redux';
// // this following 'react-redux' needs to be inside inside a component called Provider or else it will throw an error
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import reducer from './reduxStyle/store/reducer';



// const store = createStore (reducer);
// ReactDOM.render( <h1>Sample of react, along with redux 'store'</h1>, document.getElementById( 'headed' ) );
// ReactDOM.render( <Provider store={store}><App4Redux /></Provider>, document.getElementById( 'root' ) );



// import MakeUp from "./EsteeLauder/esteelauder";
// ReactDOM.render(<MakeUp/>, document.getElementById('root'));




// import Pokemon from './Pokemon/PokemonApp';
// ReactDOM.render(<Pokemon/>, document.getElementById('root'));





// import HAS to be with a capital letter
// import Legend from './legend/legend';
// import {Provider} from "react-redux";
// import {createStore} from "redux";
// import reducer from "./legend/states/allThatStuff";

// const store = createStore (reducer);

// ReactDOM.render(<Provider store={store}><Legend/></Provider>, document.getElementById('root'));






//another Redux example from utube ^_^
// this of reducer as here you actually define states
import allReducer from './React-ReduxII/lovelyTutorial';

// syntatical bullshit to attach stuff
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// i r easy components
import WhatTest from './React-ReduxII/wut';

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}><WhatTest/></Provider>, document.getElementById('root'));

registerServiceWorker();
