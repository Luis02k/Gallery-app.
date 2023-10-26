import React from "react";
import Tendencias from "./Tendencias";

const tendencias = {
  countries: [
    { label: "Chile", value: "chile" },
    { label: "Venezuela", value: "venezuela" },
    { label: "Bosnia", value: "bosnia" },
    { label: "Japan", value: "japan" },
  ],
  animals: [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Elephant", value: "elephant" },
    { label: "Lion", value: "lion" },
  ],
  food: [
    { label: "Pizza", value: "pizza" },
    { label: "Sushi", value: "sushi" },
    { label: "Tacos", value: "tacos" },
    { label: "Chocolate", value: "chocolate" },
  ],
  cities: [
    { label: "Paris", value: "paris" },
    { label: "New York", value: "new york" },
    { label: "Rome", value: "rome" },
    { label: "Tokyo", value: "tokyo" },
  ],
  colors: [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
  ],
  sports: [
    { label: "Soccer", value: "soccer" },
    { label: "Basketball", value: "basketball" },
    { label: "Tennis", value: "tennis" },
    { label: "Swimming", value: "swimming" },
  ],
  movies: [
    { label: "Avatar", value: "avatar" },
    { label: "Inception", value: "inception" },
    { label: "The Matrix", value: "the matrix" },
    { label: "Jurassic Park", value: "jurassic park" },
  ],
};
const NavB = ({ peticionN }) => {
  const handleClick = (e) => {
    peticionN(e);
  };
  return (
    <div style={{ maxWidth: "700", overflow: "auto" }}>
      <Tendencias tendencias={tendencias} handleClick={(e) => peticionN(e)} />
    </div>
  );
};

export default NavB;
