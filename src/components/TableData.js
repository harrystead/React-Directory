import React from 'react';

const Person = ({
  email,
}) => {
  return (
    <div className='person-container'>
        <p>{email}</p>
    </div>
  );
};

export default Person;