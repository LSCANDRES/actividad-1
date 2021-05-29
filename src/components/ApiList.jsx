import React from 'react';

export const ApiList = ({apiPaises, onDeletePais}) => (
    <>
      {apiPaises.map(({id,name}, idx) => (
          <li key={idx}>
          <h3>{name}</h3>
          <button onClick={() => onDeletePais(id)}>Eliminar</button>
          </li> 
      ))}
    </>
  )