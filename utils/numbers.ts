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
