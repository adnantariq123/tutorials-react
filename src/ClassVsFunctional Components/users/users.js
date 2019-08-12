import React, { Component } from 'react';

import User from './user';

/* VERY IMPORTANT

-in class component you have to import React, { Component } from 'react';
-You have a RENDER method () { and inside that the RETURN Method }
- in the class component the props are automatically avalaible ( from the parent component) 
  you can get them via this.props.WHATEVERNAMEHERE - must match the parent 

  Where/Why do should you use them? whenver you have to mantian a state use a Class component
*/
class Users extends Component {
    state = { 
        users: [
            {name:"John", age:20},
            {name:"Doe ", age:30},
            {name:"simply named"},
        ], 
        title:"Some fancy title"
     }

    makeMeYounger = () => {
        const newState = this.state.users.map((user)=>{
            const tempUser = user;
            tempUser.age -=10;
            return tempUser;
        })
        this.setState({
            newState
        });
        
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.makeMeYounger}>Make them all Young!</button>
                <br/>
                <h1>{this.state.title}</h1>

                {this.state.users.map(xyz => (
                                    
                    <User key={xyz.name}
                    name={xyz.name}
                    age={xyz.age}
                    ></User>
                ))}


            </div>
         );
    }
}
 
export default Users;