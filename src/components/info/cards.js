import React from 'react';
import CardUser from '../CardUsers/card';

export default function CardsUsers({ handleAction, sendUsers }) {

  const handleUserAction = (action, user) => {
    handleAction(action, user);
  };

  return (
    <div>
      {sendUsers.map((user) => {
        const { _id } = user;

        console.log(user)
        return (
          <CardUser
            key={_id}
            handleAction={handleUserAction}
            sendUser={user}
          />
        );
      })}
    </div>
  );
}