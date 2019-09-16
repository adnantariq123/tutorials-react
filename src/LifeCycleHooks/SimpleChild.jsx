import React, { Component } from 'react';

class SimpleChild extends Component {

        // sujestion not to call the setState.. as it might render several times based on the state/props
        render() {
            console.log("Coming from CHILD render") 
            return (
                <React.Fragment>
    
                </React.Fragment>
             );
        }
    
        // even tho this was placed below the render.. it ran this BEFORE the render... becuase this is meant to run before the render()
        // this will run only ONCE.. that is during the INITIAL stage... unlike the render() it can run again and again based on the states
        componentWillMount () {
            // at this stage the component has not Run the render
            // you can do things like setState ... may be from a prop?
            console.log("Coming from CHILD  componentWillMount");
        }
    
        // this 'event' happened at the very end... lok at the console
        componentDidMount() {
            console.log("Coming from CHILD  componentDidMount");
        }
    
}
 
export default SimpleChild;