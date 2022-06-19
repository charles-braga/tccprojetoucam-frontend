import React from 'react';
import CardDog from '../CardDogs/card';

export default function CardsDogs({ handleActionApp, sendDogs }) {

  const handleDogAction = (action, dog) => {
    handleActionApp(action, dog);
  };

  return (
    <div>
      {sendDogs.map((dog) => {
        const { _id } = dog;

        return (
          <CardDog
            key={_id}
            handleAction={handleDogAction}
            sendDog={dog}
          />
        );
      })}
    </div>
  );
}