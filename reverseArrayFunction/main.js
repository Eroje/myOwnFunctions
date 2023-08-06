// Write your code here:

const reverseArray = arr => {
    let reversed = [];
    for(let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  const reversedSentence = reverseArray(sentence).join(' ');
  
  console.log(reverseArray(sentence)); // Prints: [ 'This', 'will', 'all', 'make', 'sense.' ]

  console.log(reversedSentence); // Prints: This will all make sense.
  
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  
  