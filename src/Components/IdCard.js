import React from 'react';

function IdCard({ data }) {
  return (
    <div>
      {data.map(({ firstName, lastName, country, img }, id) => {
        return (
          <div>
            <p> First Name: {firstName}</p>
            <p> Last Name: {lastName}</p>
            <p> Country: {country}</p>
            <img src={img}></img>
          </div>
        );
      })}
    </div>
  );
}

export default IdCard;
