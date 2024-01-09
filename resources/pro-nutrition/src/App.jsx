import React from "react";
import { useState } from "react";
import FoodData from "../../FoodData";
import Search from "./Component/Search";
import FoodBox from "./Component/FoodBox";

function App(){
  const [search, setSearch] = useState("")

  const filteredSearch = FoodData.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })



  return (
    <>
      <h1>Pro-nutrition App</h1>
      <Search setSearch = {setSearch}/>
      {
        filteredSearch.length <= 0 ? (
          <h3>No data found</h3>
        ) : (
          filteredSearch.map((e, i)=>(
             <FoodBox key={i} ele = {e} index= {i} />
          ))
        )
      }

    </>
  )
}

export default App;