import foodsData from './foods.json'
import FoodBox from './components/FoodBox'
import { useState } from "react"
import { Divider, Row } from "antd"
import './App.css';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsData)

  return (
    <div className="App">
      <AddFoodForm />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map(food => 
          <FoodBox food={food}/>
        )}
      </Row>
    </div>

  );
}

export default App;
