import React from "react";
import styled from 'styled-components';
import "./SearchBar.css";

const Header = styled.div`
    width: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding:1%;
    border-bottom: 1px solid lightgray;
    margin: 1%
`;

const LogoHeader = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const LogoImage = styled.img`
    line-height: 5rem;
`;


const SearchForm = styled.form`
      
    color: lightgray;
    font-size: 16px;
`;

const SearchInput = styled.input`
    width: 250px;
    height: 32px;

    background: #fcfcfc;
    border: 1px solid #aaa;
    border-radius: 5px;
    text-indent: 32px;
`;

function SearchBar(props) {
    return (
        <Header>

            <LogoHeader>
           
            <i className="fab fa-instagram"></i>
            <LogoImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/320px-Instagram_logo.svg.png" alt="Instagram logo"/>
            </LogoHeader>

            <SearchForm onSubmit={props.search}>
            {/* <i className="fas fa-search"></i> */}
                <SearchInput
                    type="text"
                    name="search"
                    placeholder= "  Search" 
                    onChange={props.onChange}>
                </SearchInput> 
                
            </SearchForm>
            
            <div className="profileIcons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
            
        </Header>
    );
}

export default SearchBar;