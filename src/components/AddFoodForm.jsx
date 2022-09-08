import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [servings, setServings] = useState(1);
  const handleNameInput = (event) => {
    setName(event.target.value);
  };
  const handleCaloriesImput = (event) => {
    setCalories(event.target.value);
  };
  const handleImageInput = (event) => {
    setImage(event.target.value);
  };
  const handleServingsInput = (event) => {
    setServings(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newDish = { name, calories, image, servings };
    console.log('Submitted:', newDish);
    props.addFood(newDish);
  };
  return (
    <div className="AddFood">
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="Name"
          value={name}
          onChange={handleNameInput}
        />
        <label>calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesImput}
        />
        <label>image: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />
        <label>servings: </label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />
        <button type="submit">Add Food Entry</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
