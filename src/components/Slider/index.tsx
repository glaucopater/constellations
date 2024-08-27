import 'blaze-slider/dist/blaze.css';

import { ReactNode } from 'react';
import { useBlazeSlider } from 'react-blaze-slider';

export const Slider = ({ children }: { children: ReactNode[] }) => {
  const elRef = useBlazeSlider({
    all: {
      slidesToShow: 3,
    },
  });

  return (
    <div className="blaze-slider" ref={elRef}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">
            {children.map((image: ReactNode, index: number) => (
              <div key={index}>{image}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
