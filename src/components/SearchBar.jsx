import { useState } from 'react';

function FilterFoods(props) {
  const [fistLetter, setFirstLetter] = useState('All');
  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
    console.log('selected', e.target.value);
    props.filterDishes(e.target.value);
  };
  return (
    <div className="FliterFoods">
      <label>Filter : </label>
      <select value={fistLetter} onChange={handleSelect}>
        <option value={'All'}>All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default FilterFoods;
