/**
 *
 * @param {number} min the minimum positiive integer
 * @param {number} max  the minimum positiive integer
 * @returns  whole number  which is > min
 */
const randomGenerator = (min, max) => {
  return min + Math.ceil(Math.random() * (max - min));
};

/**
 *
 * @param {number} min  the minimum positiive integer
 * @param {number} max the minimum positiive integer
 * @returns whole number which is > min
 */

const getBallInitialVelocity = (min, max) => {
  const direction = [-1, 1];
  const selectedDirection =
    direction[Math.floor(Math.random() * direction.length)];
  return selectedDirection * randomGenerator(min, max);
};

/**
 * Generates a random hex color code.
 * @returns   random hex color
 */

const randomColorGenerator = () => {
  const randomColor = Math.floor(Math.random() * 16777215);
  const hexColor = "#" + randomColor.toString(16).padStart(6, "0");

  return hexColor;
};

/**
 * Calculates the distance between two points in a two-dimensional space.
 * @param {number} x1 the  x-cordinates of ball
 * @param {number} y1 the y-cordinates of ball
 * @param {number} x2 the x-cordinates otherball
 * @param {number} y2 the y-cordinates of otherball
 * @returns the distance between  ball and otherball
 */
const distanceGenerator = (x1, y1, x2, y2) => {
  const distanceX = x2 - x1;
  const distanceY = y2 - y1;
  return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
};
