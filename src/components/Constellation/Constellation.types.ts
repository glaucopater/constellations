export interface Star {
  name: string;
  x: number;
  y: number;
}

export interface Constellation {
  name: string;
  stars: Star[];
}
