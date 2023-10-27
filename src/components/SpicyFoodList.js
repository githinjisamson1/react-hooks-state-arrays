import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
  }

  // !remove element from arrays in state/based on id
  const handleRemoveFood = (id) => {
    return foods.filter((food) => {
      return food.id !== id;
    });
  };

  // !update elements in arrays in state/based on id
  const handleUpdateFood = (id) => {
    return foods.map((food) => {
      if (food.id === id) {
        return { ...food, heatLevel: food.heatLevel + 1 };
      } else {
        return food;
      }
    });
  };
  const foodList = foods.map((food) => (
    <li
      key={food.id}
      // onClick={() => {
      //   handleRemoveFood(food.id);
      // }}
      onClick={() => {
        handleUpdateFood(food.id);
      }}
    >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;

// TODO: array cheatsheet
// adding: [...]/spread operator
// update: .map()
// remove: .filter()

// can work with multiple state variables

// states
// const [foods, setFoods] = useState(spicyFoods);
// const [filterBy, setFilterBy] = useState("All");

// shortened array
// const foodsToDisplay = foods.filter((food) => {
//   if (filterBy === "All") {
//     return true;
//   } else {
//     return food.cuisine === filterBy;
//   }
// });

// iterating over shortened array
// const foodList = foodsToDisplay.map((food) => (
//   <li key={food.id} onClick={() => handleLiClick(food.id)}>
//     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
//   </li>
// ));