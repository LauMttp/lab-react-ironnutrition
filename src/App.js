import './App.css';
import 'antd/dist/antd.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import FilterFoods from './components/SearchBar';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodData, setFoodData] = useState(foods);

  function addFoodEntry(newDish) {
    const updatedFoodList = [...foodList, newDish];
    const updatedFoodData = [...foodData, newDish];
    setFoodList(updatedFoodList);
    setFoodData(updatedFoodData);
  }
  function filterDishes(letter) {
    let filteredDishes;
    if (letter === 'All') {
      filteredDishes = foodData;
    } else {
      filteredDishes = foodData.filter((dish) => {
        return dish.name[0].toLowerCase() === letter.toLowerCase();
      });
    }
    setFoodList(filteredDishes);
  }
  function removeDish(dishName) {
    const updatedFoodList = foodList.filter(
      (dishToRemove) => dishToRemove.name !== dishName
    );
    setFoodList(updatedFoodList);
  }
  return (
    <div className="App">
      <h1>Add Food Entry</h1>
      <AddFoodForm addFood={addFoodEntry} />
      <FilterFoods filterDishes={filterDishes}/>
      <h1>Food List</h1>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map((dish) => {
          return (
            <div key={dish.name}>
              <FoodBox food={dish} removeFood={removeDish} />
            </div>
          );
        })}
      </Row>
    </div>
  );
}
export default App;
