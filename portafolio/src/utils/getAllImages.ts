export const getAllImages = (
  route: string,
  quantity: number
): Array<string> => {
  const images: Array<string> = [];

  for (let i: number = 1; i <= quantity; i++) {
    images.push(`${route}${i}.png`);
  }

  return images;
};
