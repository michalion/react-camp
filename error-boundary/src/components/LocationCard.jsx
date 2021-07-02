import React from "react";

const locationStyle = {
  width: "200px",
  padding: "8px",
  margin: "20px",
  border: "2px solid black",
  borderRadius: "15px",
};

const LocationCard = (props) => {
  return (
    <div style={locationStyle}>
      <p>
        <b>Name:</b> {props.name.toUpperCase()}
      </p>
      <p>
        <b>Zone:</b> {props.zone}
      </p>
      <p>
        <b>Region:</b> {props.region}
      </p>
    </div>
  );
};

export default LocationCard;
