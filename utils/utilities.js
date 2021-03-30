/*
 * Return a randomly chosen element/item of the input array.
 */
const randomizer = (array, min = 0, max = array.length) => {
  // generate a random number between min and max, not including max
  //   const min = 0
  //   const max = array.length
  const randomIndex = Math.floor(Math.random() * (max - min) + min)

  return array[randomIndex]
}

module.exports = {
  randomizer,
}
