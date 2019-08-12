import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// If you want your app to work offline and load faster, you can change: serviceWorker.unregister();
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA





import App from './AppBlog';
ReactDOM.render( <App />, document.getElementById( 'root' ) );





// import App4ClassVsFunctional from './App4ClassvsFunctional';
// ReactDOM.render( <h1>Difference between Class Componenets VS Functional Componenets</h1>, document.getElementById( 'headed' ) );
// ReactDOM.render( <App4ClassVsFunctional />, document.getElementById( 'root' ) );





// import App4Redux from './reduxStyle/App4Redux';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import reducer from './reduxStyle/store/reducer';

// const store = createStore (reducer);
// ReactDOM.render( <h1>Sample of react, along with redux 'store'</h1>, document.getElementById( 'headed' ) );
// ReactDOM.render( <Provider store={store}><App4Redux /></Provider>, document.getElementById( 'root' ) );











registerServiceWorker();
