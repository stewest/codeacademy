import React from "react";

import Tile from "../tile/Tile";

const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};

export default TileList;
