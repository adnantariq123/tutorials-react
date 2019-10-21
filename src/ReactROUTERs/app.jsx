import React from "react";

import Nav from "./nav";
import About from "./about";
import Shop from "./shop";
import AnotherComponent from "./anotherComponent";
import ItemDetail from './itemDetail';

import "./style.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/shop' exact component={Shop}/>
            <Route path='/another' component={AnotherComponent}/>
            <Route path='/shop/:id' component={ItemDetail}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home =() => (
    <div>
        <h1>React Routers</h1>
    </div>
);

export default App;
