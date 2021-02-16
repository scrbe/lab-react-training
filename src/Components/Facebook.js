import React from 'react';
import profiles from '../data/berlin.js';

const cardStyle = {
  border: '2px solid black',
    display: 'flex',
    margin: '10px'
};

const imageStyle = {
    width: '150px',
    'padding': '15px'
};

const contactInfoStyle = {
  display: 'flex',
    'flex-direction': 'column',
  'align-items': 'flex-start'
};

function Facebook() {
  console.log('profiles', profiles);
  return (
    <section>
      {profiles.map(({ firstName, lastName, country, img, isStudent }) => {
        return (
          <div style={cardStyle}>
            <div>
                <img src={img} style={imageStyle}></img>
            </div>
            
            <div style={contactInfoStyle}>
              <p>
                {' '}
                <strong>First Name:</strong> {firstName}
              </p>
              <p>
                {' '}
                <strong>Last Name:</strong> {lastName}
              </p>
              <p>
                {' '}
                <strong>Country:</strong> {country}
              </p>
              <p>
                        <strong>Type:</strong> {
                            (isStudent ? 'Student' : 'Teacher')
                        }
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Facebook;
