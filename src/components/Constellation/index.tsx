import { ConstellationProps } from './Constellation.types';

const Constellation = (data: ConstellationProps) => {
  return (
    <svg width="300" height="300" style={{ backgroundColor: 'black' }}>
      {/* Draw Lines */}
      {data.lines.map((line, index) => {
        const startStar = data.stars[line.start - 1];
        const endStar = data.stars[line.end - 1];
        return (
          <line
            key={index}
            x1={startStar.x}
            y1={startStar.y}
            x2={endStar.x}
            y2={endStar.y}
            stroke="white"
            strokeWidth="1"
          />
        );
      })}
      {/* Draw Stars and Names */}
      {data.stars.map((star, index) => (
        <g key={index}>
          <circle cx={star.x} cy={star.y} r="2" fill="white" />
          <text x={star.x + 3} y={star.y - 3} fill="cyan" fontSize="6">
            {star.name}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default Constellation;
