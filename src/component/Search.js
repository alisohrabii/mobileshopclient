import React from 'react';
import './search.css';
import searchphoto from '../images/search2.svg';


const Search = () => {
    return (
        <div className='search'>
            <img src={searchphoto} width='24px' height='24px'/>
             <input type='text' placeholder=' کالای مورد نظر را جستجو کنید'></input>
        </div>
    );
};

export default Search;