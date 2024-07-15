export const getNutriValue = (array: any[], value: string) => {
  return array.reduce((acc, curr) => acc + curr[value], 0);
};
