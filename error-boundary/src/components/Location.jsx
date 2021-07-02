import React from "react";
import LocationCard from "./LocationCard";
import GenericErrorBoundary from "./GenericErrorBoundary";

const flexStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const Location = ({ locations }) => {
  return (
    <div>
      <div>
        <div>
          <h2>Locations</h2>
        </div>
      </div>
      <div style={flexStyle}>
        {locations.map((location) => (          
            <LocationCard key={location.name} {...location} />          
        ))}
      </div>
    </div>
  );
};

export default Location;
