import React from "react";

function Search(props){
    const {setSearch} = props;
    return (
        <>
            <h1>Search</h1>
            <input 
            type="text"
            placeholder="search for food here"
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
            
            />
        </>
    )
}

export default Search;