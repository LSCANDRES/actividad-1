import React from 'react';

export const CountrieList = ({Countries, onDeletePais}) => (
  
    <>
      {Countries.map(({id,name}, idx) => (
          <li key={idx}>
          <h3>{name}</h3>
          <button onClick={() => onDeletePais(id)}>Delete</button>
          </li> 
      ))}
    </>
  )