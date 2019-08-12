import React, { Component } from 'react';

class Menu extends Component {

    state = {
        showingSearch: false,
        inputValue: ''
    }       


    showSearchContainer(e) {
        e.preventDefault();
        //console.log(AllData);
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
            console.log(this.state.inputValue);
          });
    };
    
    
    render() { 
        return (
            <div className="container ">

            
            <nav className="navbar navbar-dark bg-dark text-white">
                <a className="navbar-brand">Navbar</a>
                <a className="nav-item">HOLIDAY</a>
                <a className="nav-item">WHAT'S NEW</a>

                <a onClick={(e) => this.showSearchContainer(e)}>
                    <i className="material-icons search">search</i>
                </a>
            </nav>

            <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
            <input type="text" id="myInput" onChange={(e) => this.onSearch(e)} />
            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                <i className="material-icons close">close</i>
            </a>
            </div>
                
                
            </div>

        );
    }
}
 
export default Menu;