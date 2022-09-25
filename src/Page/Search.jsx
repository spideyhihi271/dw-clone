import React from 'react';
import Footer from '../component/Footer/Footer';
import NavBar from '../component/NavBar/NavBar';
import SearchContainer from '../component/Search/searchContainer';

const Search = () => {
    return (
        <div>
            <NavBar/>
            <SearchContainer/>
            <Footer/>
        </div>
    );
};

export default Search;