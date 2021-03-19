import React from 'react';
const Person = ({
  email,
  picture,
  fullname,
  location,
  dateBirth
}) => {
  return (
    <tr>
      <td><img src={picture}></img></td>
      <td>{fullname}</td>
      <td>{email}</td>
      <td>{location}</td>
      <td>{dateBirth.slice(0,10)}</td>
    </tr>
  );
};

export default Person;