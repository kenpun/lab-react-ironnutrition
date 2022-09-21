import { Divider, Input } from 'antd';
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);
  
    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        const _id = uuidv4();
        const newFood = { _id, name, image, calories, servings };
        console.log('newFood:', newFood);
    }

    return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput}/>

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput}/>

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput}/>

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput}/> 

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;