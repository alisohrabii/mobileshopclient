import React,{useState} from 'react';
import './search.css';
import searchphoto from '../images/search2.svg';
import SearchShow from './SearchShow';


const Search = (props) => {
    const [SearchTerm2, setSearchTerm2] = useState('');
  const handlesearch=(e)=>{
    setSearchTerm2(e.target.value);
    props.handleParentSearch(e.target.value);
  }
  const handlesearchshow=()=>{
const elem= document.getElementById('searchshow')
elem.style.display='block';
  }
  
  const handledissearchshow=()=>{
    
    const elem= document.getElementById('searchshow')
    elem.style.display='none';
      }
    return (
        <div className='search'>
            <img src={searchphoto} width='24px' height='24px'/>
            <div className='search-input-con'> <input type='text' value={SearchTerm2} onFocus={handlesearchshow} onBlur={handledissearchshow}  onChange={handlesearch} placeholder=' کالای مورد نظر را جستجو کنید'></input></div> 
           <div id='searchshow' className='searchshow'> <SearchShow items={props.searchshowitems}/></div> 
        </div>
    );
};

export default Search;