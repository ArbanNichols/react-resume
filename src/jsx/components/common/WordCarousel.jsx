import React from 'react';
import { useState } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup.js';
import { useInterval } from '../../../js/hooks';

const WordCarousel = props => {
  const { words } = props;

  const l = words.length;
  let [index, cycleWord] = useState(0);

  useInterval(() => {
    cycleWord((index = Math.floor(Math.random() * l)));
  }, 3000);

  return (
    <>
      <CSSTransitionGroup
        transitionName="carousel"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={0.5}
      >
        <span key={words[index]}>{words[index]}</span>
      </CSSTransitionGroup>
    </>
  );
};

export default WordCarousel;
