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
    <div className="headshot">
      <Image src={headshot} rounded />
      <p>
        arban.nichs@gmail.com
        <i className="icon ion-md-copy" onClick={handleClick} />
      </p>
      <div className="links">
        <a href="https://linkedin.com/in/arban-nichols" target="_blank">
          <i className="icon ion-logo-linkedin" />
        </a>
        <a href="https://github.com/ArbanNichols" target="_blank">
          <i className="icon ion-logo-github" />
        </a>
      </div>
    </div>
  );
};

export default Headshot;
