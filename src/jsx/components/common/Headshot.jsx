import React from 'react';
import { Image } from 'react-bootstrap';
import headshot from '../../../static/headshot.jpg';

const Headshot = () => {
  const handleClick = () => {
    navigator.clipboard
      .writeText('arban.nichs@gmail.com')
      .then(() => {
        console.log('Email copied to clipboard');
      })
      .catch(() => {
        console.log('Failed to copy email.');
      });
  };

  return (
    <div className="center headshot">
      <Image src={headshot} rounded />
      <p>
        arban.nichs@gmail.com
        <i className="icon ion-md-copy" onClick={handleClick} />
      </p>
      <i className="icon ion-logo-linkedin" />
      <i className="icon ion-logo-github" />
    </div>
  );
};

export default Headshot;
