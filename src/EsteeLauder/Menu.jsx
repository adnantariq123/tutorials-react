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
            //console.log(this.state.inputValue);
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

            <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
            <input type="text" id="myInput" onChange={(e) => this.onSearch(e)} />
            {/* a tag is missing the href so it looks wired... not the end of the world */}
            <a onClick={(e) => this.showSearchContainer(e)}>
                <i className="material-icons close">close</i>
            </a>
            </div>
                
                
            </div>

        );
    }
}
 
export default Menu;