import foodsData from './foods.json'
import FoodBox from './components/FoodBox'
import { useState } from "react"
import { Divider } from "antd"
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [foods, setFoods] = useState(foodsData)

  return (
    <div className="App">
      
      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
      
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
