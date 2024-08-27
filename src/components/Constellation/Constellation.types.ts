export interface Star {
  name: string;
  x: number;
  y: number;
}

export interface ConstellationProps {
  name: string;
  stars: Star[];
  lines: { start: number; end: number }[];
}
