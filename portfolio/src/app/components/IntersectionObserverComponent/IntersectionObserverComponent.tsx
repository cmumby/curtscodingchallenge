// components/IntersectionObserverComponent.jsx
import React, { useState, useRef, useEffect } from 'react';

import { animateHome } from '../../utils';

const IntersectionObserverComponent = ({ handleIntersection }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = animateHome();
    const observer = new IntersectionObserver(handleIntersection, options);
    if (targetRef.current) observer.observe(targetRef.current);

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={targetRef} />;
};

export default IntersectionObserverComponent;
