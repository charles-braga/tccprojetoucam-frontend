import React from 'react';
import CardDog from '../CardDogs/card';

export default function CardsDogs({ handleAction, sendDogs }) {

  const handleDogAction = (action, dog) => {
    handleAction(action, dog);
  };

  return (
    <div>
      {sendDogs.map((dog) => {
        const { _id } = dog;
        console.log(dog);

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