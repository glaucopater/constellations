import React from 'react';

import { Constellation, Star } from './Constellation.types';

interface StarProps {
  star: Star;
}

const StarComponent: React.FC<StarProps> = ({ star }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${star.x}%`, // You can adjust these percentage values based on your layout
        top: `${star.y}%`,
        transform: 'translate(-50%, -50%)', // To center the star on its position
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: 'yellow', // or any other color representing the star
      }}
    />
  );
};

interface ConstellationProps {
  constellation: Constellation;
}

const ConstellationComponent: React.FC<ConstellationProps> = ({ constellation }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        border: '1px solid red',
        background: 'black',
        margin: 8,
      }}
    >
      {constellation.stars.map((star, index) => (
        <StarComponent key={index} star={star} />
      ))}
    </div>
  );
};

export default ConstellationComponent;
