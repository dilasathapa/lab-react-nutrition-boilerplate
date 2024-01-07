import { useState } from 'react'
import './App.css'
import FoodBox from './Component/FoodBox'
import Search from './Component/Search'
import FoodData from "./../../FoodData.js"


function App() {

  const [search, setSearch] = useState("");
  console.log("foodData", FoodData);

  const filteredFoodData = FoodData.filter((e)=>{
    return (
      e.name.toLowerCase().includes(search.toLowerCase())
    )
  })


  return (
    <>
      <div>
        <h1>Pro-Nutrition App</h1>
        <Search setSearch={setSearch} />
        {
          filteredFoodData.length <= 0 ? (
            <>
            <h1>No matching fooditem</h1>
            </>
          ) : (
            filteredFoodData.map((e, i)=>(
              <FoodBox key={i} data={e} index={i} />
            ))
          )
        }
      </div>
    </>
  )
}

export default App
