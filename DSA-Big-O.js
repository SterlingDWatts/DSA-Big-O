const dsaBigO = {
  dogFriend(dogOwnerArray) {
    // 1) O(1)
    // 2) O(n)
  },
  isEven(value) {
    /*  O(1)
        isEven only performs one operation regardless of the size of the value 
    */
    if (value % 2 === 0) {
      return true;
    } else return false;
  },
  areYouHere(arr1, arr2) {
    /*  O(n^2)
        areYouHere has to loop through each array item in the second array once 
        for each item in the first array until it finds a match
    */
    for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
        const el2 = arr2[j];
        if (el1 === el2) return true;
      }
    }
    return false;
  },
  doubleArrayValues(array) {
    /*  O(n)
        doubleArrayValues simply loops through each array item once in order to 
        double it
    */
    for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
    }
    return array;
  },
  naiveSearch(array, item) {
    /*  O(n)
        naiveSearch loops through each item in the array once until it finds the 
        matching item
    */
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return i;
      }
    }
  },
  createPairs(arr) {
    /*  O(n^log n)
        createPairs loops through the array and for each item in the array it loops
        through a progressively smaller subgroup of the array
    */
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        console.log(arr[i] + ", " + arr[j]);
      }
    }
  },
  compute(num) {
    /*  O(n)
        compute loops throug each item in the array once
        This is a fibonacci sequence creater
    */
    let result = [];
    for (let i = 1; i <= num; i++) {
      if (i === 1) {
        result.push(0);
      } else if (i === 2) {
        result.push(1);
      } else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    return result;
  },
  efficientSearch(array, item) {
    /*  O(log n)
        efficientSearch looks at the middle item in an array to see if
        it is greater than or less than the item in question. It then looks
        in the appropriate half repeating the previous steps until there is only one item left
    */
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
        minIndex = currentIndex + 1;
      } else if (currentElement > item) {
        maxIndex = currentIndex - 1;
      } else {
        return currentIndex;
      }
    }
    return -1;
  },
  findRandomElement(arr) {
    /*  O(1)
        findRandomElement only performs one action regardess of array size
    */
    return arr[Math.floor(Math.random() * arr.length)];
  },
  isWhat(n) {
    /*  O(n)
        isWhat checks if an item is prime or not by dividing by each number before it
        to see if it does not leave a remainder
    */
    if (n < 2 || n % 1 !== 0) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  },
  towersOfHanoi(something) {
    // do stuff
  },
  countingSheep(numSheep) {
    for (let i = numSheep; i >= 1; i--) {
      if (numSheep === 1) {
        console.log("All sheep jumped over the fence")
      } else {
        console.log(`${numSheep}: Another sheep jumps over the fence`)
      }
    }
  },
  powerCalculator(baseInt, exponentInt) {
    let total = baseInt
    if (exponentInt <= 0) {
      return console.log("Exponent should be greater than or equal to zero");
    } else if (exponentInt === 1) {
      return total;
    }
    for (let i = 1; i < exponentInt; i ++) {
      total *= baseInt
    }
    return baseInt
  },
  reverseString(string) {
    if (string.length === 1) {
      return string;
    }
    let reversedString = "";
    for (let i = 0; i < string.length; i++) {
      reversedString = string[i] + reversedString
    }
    return reversedString
  },
  nthTriangularNumber(number) {
    if (number === 1) {
      return number;
    }
    let total = 0
    for (let i = 1; i <= number; i++) {
      total += i
    }
    return total
  },
  stringSplitter(string, splitter) {
    if (!string.includes(splitter)) {
      return [string];
    }
    let partialString = "";
    let stringArray = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== splitter) {
        partialString += string[i]
      } else if (string[i] === splitter || i === string.length - 1) {
        stringArray.push(partialString)
        partialString = ""
      }
    }
    return stringArray;
  },
  fibonacci(number) {
    if (number <= 0) {
      return [];
    } else if (number === 1) {
      return [1];
    } else if (number === 2) {
      return [1, 1];
    }
    let fibSequence = [1, 1]
    for (let i = 3; i <= number; i ++) {
      currentFibNumber = fibSequence[i - 1] + fibSequence[i - 2]
      fibSequence.push(currentFibNumber)
    }
    return fibSequence
  },
  factorial(number) {
    if (number <= 0) {
      return 0;
    } 
    let total = 1
    for (let i = 1; i <= number; i++) {
      total *= i
    }
    return total
  },
};
