import React from "react";
// import "./SearchBar.css";

function SearchBar() {
    return (
        <div>
            <img alt="Instagram logo"/>
            <form>
                <input
                    type="text"
                    name="search"
                    placeholder="Search" >
                </input>
            </form>
            
        </div>
    );
}

export default SearchBar;