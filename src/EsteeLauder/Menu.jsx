import React, { Component } from 'react';

import "./menu.css";

class Menu extends Component {

    state = {
        showingSearch: false,
        inputValue: ''
    }       


    showSearchContainer(e) {
        e.preventDefault();
        // this state change simply shows or hides the search input field, kinda like your display: hiden/block but throught memory
        this.setState({
            showingSearch: !this.state.showingSearch
        });
    }

    onSearch(e) {
        // Start Here

        this.setState({
            inputValue: e.target.value
          }, () => {
            this.props.textChange(this.state.inputValue);
            console.log("coming from Menu components stsate - this.state.inputValue : " + this.state.inputValue);
          });
    };
    
    
    render() { 
        return (
            <div className="container ">

            
            <nav className="navbar navbar-dark bg-dark text-white">
                <button className="navbar-brand">Navbar</button>
                <button className="nav-item">HOLIDAY</button>
                <button className="nav-item">WHAT'S NEW</button>

                <button onClick={(e) => this.showSearchContainer(e)}>
                    <i className="material-icons search">search</i>
                </button>
            </nav>

            {/* modify this div, by removing showing class functionality compltelly
            becuase in react we dont need to manuplating the dom with show and hide... 
            we can completelly REMOVE that section based on the state, cool!
            
            <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>

            look at {this.state.showingSearch ?  IF that is true then spint in the code with the <div className={"search-container"}>
            ELSE
            :null}
            */}
            
            
            {this.state.showingSearch ? 
                <div className={"search-container"}>
                <input type="text" id="myInput" onChange={(e) => this.onSearch(e)} />
                {/* a tag is missing the href so it looks wired... not the end of the world */}
                <a onClick={(e) => this.showSearchContainer(e)}>
                    <i className="material-icons close">close</i>
                </a>
                </div>

            :null}
                
                
            </div>

        );
    }
}
 
export default Menu;