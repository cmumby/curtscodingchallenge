import React, { useState, useRef } from 'react';

const LongPress = ({ onLongPress, children, delay = 500 }) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timerRef = useRef(null);

  const startPressTimer = () => {
    setLongPressTriggered(false);
    timerRef.current = setTimeout(() => {
      onLongPress();
      setLongPressTriggered(true);
    }, delay);
  };

  const clearPressTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleMouseDown = () => {
    startPressTimer();
  };

  const handleMouseUp = () => {
    clearPressTimer();
  };

  const handleTouchStart = () => {
    startPressTimer();
  };

  const handleTouchEnd = () => {
    clearPressTimer();
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={clearPressTimer}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={clearPressTimer}
    >
      {children}
    </div>
  );
};

export default LongPress;
