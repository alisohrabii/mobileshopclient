
import React from 'react';
import './search.css';
const SearchShow = (props) => {
    const items=props.items;
    return (
        <div className='searchshow-inside'>
            { items.map(item=>{
                  return(<div>{item.name}</div>
                        )})}
        </div>
    );
};

export default SearchShow;