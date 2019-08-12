import React from 'react';


/* VERY IMPORTANT

these are stateless components
-in function component you DO NOT have to import React, { Component } from 'react';
-You DO NOT have a RENDER method.. you just have the RETURN Method with your logic
- in functional component you HAVE to DEFINE or pass props as an arguement the function takes then it is avalaible
  here for example User = (props) => AND when using them you DON't have to do this.props... just use props.WHATEVERNAME

Where/Why do should you use them? use the ES6 function components as much as possible.. but you cannot mantain state here
functional components `might` not have a way to define a sate
*/



const User = (props) => {
    return (
        <React.Fragment>
            
        <h3>{props.name}</h3>
        <p>Age is {props.age}</p>
        </React.Fragment>
    )
};

export default User;