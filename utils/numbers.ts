type RandomOptions = {
  direction: "DOWN" | "UP"
}

const defaultRandomOptions: RandomOptions = {
  direction: "DOWN"
}

export const getRandomInt = (max: number, options: RandomOptions = defaultRandomOptions) => {
  switch (options.direction) {
    case "DOWN":
     return Math.floor(Math.random() * Math.floor(max))
    case "UP":
     return Math.ceil(Math.random() * Math.ceil(max))
  }
}

export const createRange = (upperBound: number) => {
  return Array.from(Array(upperBound).keys())
}

export function shuffle(array: number[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
