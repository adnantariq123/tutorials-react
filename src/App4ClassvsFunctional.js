import React, { Component } from 'react';

import Users from './ClassVsFunctional Components/users/users';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <p>
      <b>Class Components</b><br/>
      -in class component you have to import React, { Component } from 'react';<br/>
-You have a RENDER method () {  } and inside that the RETURN Method<br/>
- in the class component the props are automatically avalaible ( from the parent component) <br/>
  you can get them via this.props.WHATEVERNAMEHERE - must match the parent <br/>
  <br/><br/>
  Where/Why do should you use them? whenver you have to mantian a state use a Class component        
      </p>
      <p>
        <b>Functional Components</b><br/>
these are stateless components<br/>
-in function component you DO NOT have to import React, { Component } from 'react';<br/>
-You DO NOT have a RENDER method.. you just have the RETURN Method with your logic<br/>
- in functional component you HAVE to DEFINE or pass props as an arguement the function takes then it is avalaible<br/>
  here for example User = (props) => AND when using them you DON't have to do this.props... just use props.WHATEVERNAME
  <br/><br/>
Where/Why do should you use them? use the ES6 function components as much as possible.. but you cannot mantain state here
functional components `might` not have a way to define a sate
        
      </p>
      <div className="App">
        <Users title="List of Users!"/>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
