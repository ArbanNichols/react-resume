import React from 'react';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
      <TransitionGroup>
        <CSSTransition
          key={words[index]}
          classNames="carousel"
          timeout={{ enter: 500, exit: 0.5 }}
        >
          <span>{words[index]}</span>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default WordCarousel;
