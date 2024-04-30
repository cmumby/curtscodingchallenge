// components/IntersectionObserverComponent.jsx
import React, { useState, useRef, useEffect } from 'react';

import { animateHome } from '../../utils';

const IntersectionObserverComponent = () => {
  const handleIntersection = (entries: { boundingClientRect: any }[]) => {
    entries.forEach((entry: { boundingClientRect: any }) => {
      const targetRect = entry.boundingClientRect;
      const viewportAboveAboutSection = targetRect.top < 0;

      if (viewportAboveAboutSection) {
        //setLogoText('Curtis Mumby');
        //setLogoDescriptionHidden(false);
        console.log('ABOVE');
      } else {
        console.log('BELOW');
        // setLogoText('CurtsCode');
        //setLogoDescriptionHidden(true);
      }
    });
  };

  const targetRef = useRef(null);

  useEffect(() => {
    console.log('HITTTTT');
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
