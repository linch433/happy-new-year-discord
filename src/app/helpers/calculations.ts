export const calc = (x: number, y: number): number[] => [
  (window.innerHeight / 2 - y) / 50,
  (x - window.innerWidth / 2) / 50,
  1.1,
];

export const trans = (x: number, y: number, s: number): string =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
