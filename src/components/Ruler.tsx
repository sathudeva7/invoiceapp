import React from 'react';

const Ruler = ({
  length = 210,
  unit = 'mm',
  interval = 10,
  orientation = 'horizontal',
}) => {
  const ticks = [];
  for (let i = 0; i <= length; i += interval) {
    ticks.push(i);
  }

  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={`relative bg-white ${
        isHorizontal ? 'w-full h-5' : ' w-5 mt-[52px]'
      } border border-gray-400`}
    >
      {ticks.map((tick, index) => (
        <div
          key={index}
          className={`absolute flex ${
            isHorizontal ? 'flex-col items-center' : 'flex-row items-start'
          }`}
          style={
            isHorizontal
              ? { left: `${(tick / length) * 100}%` }
              : { top: `${(tick / length) * 100}%` }
          }
        >
          <div
            className={`bg-gray-300 ${
              isHorizontal ? 'w-0.5 h-5' : 'h-0.5 w-5'
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Ruler;
