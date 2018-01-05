export const parseColor = (item) => {
  return 'rgb(' + item.red + ',' + item.green + ',' + item.blue + ')'
}

const stopWords = [
  'a', 'an', 'the', 'of', 'at', 'on', 'upon', 'in', 'to', 'from', 'out', 'as', 'so', 'such', 'or', 'and', 'those', 'this', 'these',
  'that', 'for', 'is', 'was', 'am', 'are', '\'s',
  'been', 'were'
]

export const stringToWordList = (item) => {
  console.log(item)
  const wordList = item.replace(/[.?!,/-/'/"]/g, ' ')
    .split(' ')
    .filter(a => a && !stopWords.includes(a.toLowerCase()))
  let count = {}
  wordList.map(word => {
    if (count[word]) count[word] += 1
    else count[word] = 1
  })
  return Object.entries(count)
}
