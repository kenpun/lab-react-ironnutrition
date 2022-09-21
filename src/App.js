import foodsData from './foods.json'
import { useState } from "react"
import { Divider } from "antd"
import './App.css';

function App() {
  const [foods, setFoods] = useState(foodsData)
  

  return (
    <div className="App">
      
      <Divider>Food List</Divider>
      {foods.map(food => {
        return (
          <div>
            <p> {food.name} </p>
          <img src={food.image} alt="food" width={"100px"} />
          </div>
      )})}


      

    </div>
  );
}

export default App;
