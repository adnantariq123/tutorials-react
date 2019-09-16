import React, { Component } from 'react';
import SimpleChild from './SimpleChild';

class LifeCycle extends Component {

    // **** ALL THE MAGIC IS RECORDED IN THE CONSOLE.LOG.... take a look! ****

    //When you first build a componenets the constructor method is runs 
    constructor() {
        super();
        this.state = {
            name:'John'
        }
        console.log("from constructor");
    }


    // sujestion not to call the setState.. as it might render several times based on the state/props
    render() {
        console.log("from render") 
        return (
            <React.Fragment>
                <SimpleChild/>

            </React.Fragment>
         );
    }

    // even tho this was placed below the render.. it ran this BEFORE the render... becuase this is meant to run before the render()
    // this will run only ONCE.. that is during the INITIAL stage... unlike the render() it can run again and again based on the states
    componentWillMount () {
        // at this stage the component has not Run the render
        // you can do things like setState ... may be from a prop?
        console.log("from componentWillMount");
    }

    // this 'event' happened at the very end... look at the end of console
    // Also this runs only once
    componentDidMount() {
        console.log("from componentDidMount");
    }



}
 
export default LifeCycle;