const animals = [
  'pig',
  'elephant',
  'kitty',
  'monkey',
  'donkey',
  'zebra',
  'cow',
  'penguin',
  'puppy',
  'lion',
  'chicken',
  'chick',
  'duck',
  'walrus'
]

const adjectives = [
  'sweet',
  'adorable',
  'pretty',
  'charming',
  'loveable',
  'cute',
  'darling',
  'endearing',
  'amorous',
  'delightful',
  'adventurous',
  'shine',
  'beautiful',
  'blushing',
  'colorful'
]

export default function () {
  const randomAnimalIndex = Math.floor(Math.random() * animals.length)
  const randomAdjectivesIndex = Math.floor(Math.random() * adjectives.length)

  return {
    animal: animals[randomAnimalIndex],
    adjective: adjectives[randomAdjectivesIndex],
    url: `./assets/animals/${animals[randomAnimalIndex]}.png`
  }
}