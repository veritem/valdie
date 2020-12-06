export const sum = (...a: number[]): number =>
  a.reduce((acc, val) => acc + val, 0)
