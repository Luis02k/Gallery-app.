import Link from "next/link";
import React, { useRef, useState } from "react";

const Tendencias = ({ tendencias, handleClick }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "850px",
        overflowY: isHovered ? "scroll" : "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h4
        style={{
          fontWeight: "800",
        }}
      >
        Animals
      </h4>

      {tendencias.animals.map((item, index) => (
        <label
          key={index}
          onClick={(e) => {
            handleClick(item.value);
          }}
        >
          {item.label}
        </label>
      ))}

      <h4
        style={{
          fontWeight: "800",
          marginTop: "5px",
        }}
      >
        Countries
      </h4>
      {tendencias.countries.map((item, index) => (
        <label
          key={index}
          onClick={(e) => {
            handleClick(item.value);
          }}
        >
          {item.label}
        </label>
      ))}

      <h4
        style={{
          fontWeight: "800",
          marginTop: "5px",
        }}
      >
        {" "}
        Cities
      </h4>
      {tendencias.cities.map((item, index) => (
        <label
          key={index}
          onClick={(e) => {
            handleClick(item.value);
          }}
        >
          {item.label}
        </label>
      ))}

      <h4
        style={{
          fontWeight: "800",
          marginTop: "5px",
        }}
      >
        {" "}
        Food
      </h4>
      {tendencias.food.map((item, index) => (
        <label
          key={index}
          onClick={(e) => {
            handleClick(item.value);
          }}
        >
          {item.label}
        </label>
      ))}

      <h4
        style={{
          fontWeight: "800",
          marginTop: "5px",
        }}
      >
        {" "}
        Colors
      </h4>
      {tendencias.colors.map((item, index) => (
        <label
          key={index}
          onClick={(e) => {
            handleClick(item.value);
          }}
        >
          {item.label}
        </label>
      ))}

      <h4
        style={{
          fontWeight: "800",
          marginTop: "5px",
        }}
      >
        {" "}
        Sports
      </h4>
      {tendencias.sports.map((item, index) => (
        <label
          key={index}
          onClick={(e) => {
            handleClick(item.value);
          }}
        >
          {item.label}
        </label>
      ))}

      <h4
        style={{
          fontWeight: "800",
          marginTop: "5px",
        }}
      >
        {" "}
        Movies
      </h4>
      {tendencias.movies.map((item, index) => (
        <label
          key={index}
          onClick={(e) => {
            handleClick(item.value);
          }}
        >
          {item.label}
        </label>
      ))}
    </div>
  );
};

export default Tendencias;
