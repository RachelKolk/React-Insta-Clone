import React from "react";
import "./SearchBar.css";

function SearchBar() {
    return (
        <div className="SearchBar">

            <div className="logo">
            <i class="fab fa-instagram"></i>
            <img className="logoScript" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg" alt="Instagram logo"/>
            </div>

            <form className="searchForm">
                  
                <input 
                    type="text"
                    name="search"
                    placeholder= "  Search" >
                
                </input>
                <i className="fas fa-search"></i>
            </form>
            
            <div className="profileIcons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
            
        </div>
    );
}

export default SearchBar;