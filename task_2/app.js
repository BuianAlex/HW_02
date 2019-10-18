// Дан масив чисел, которые представляют собой показатели высоты скал: [2,1,5,0,3,4,7,2,3,1,0]
// (для примера дан этот масив, но может быть любой, Ваш алгоритм должен решать все случаи)
// Посчитать количество воды (количество синих йчеек), набранной в ямы после дождя.
// Нужно по возможности использовать методы массива, а не обычные цыклы.
// Например, в даном примере правильный ответ: 10

"use strict";

function underWater(params) {
  let water = 0;
  let max = Math.max.apply(null, params);
  let maxIndex = params.indexOf(max);
  let left = params.slice(0, maxIndex);
  let right = params.slice(maxIndex + 1, params.length);
  leftSearch(left);
  rightSeatch(right);
  return water;

  function rightSeatch(paramArray) {
    let max = Math.max.apply(null, paramArray);
    let maxIndex = paramArray.indexOf(max);

    for (let i = maxIndex - 1; i >= 0; i--) {
      water += max - paramArray[i];
    }

    if (maxIndex < paramArray.length - 1) {
      let rightOver = paramArray.slice(maxIndex + 1, paramArray.length);
      rightSeatch(rightOver);
    }
  }

  function leftSearch(paramArray) {
    let max = Math.max.apply(null, paramArray);
    let maxIndex = paramArray.indexOf(max);

    for (let i = maxIndex + 1; i < paramArray.length; i++) {
      water += max - paramArray[i];
    }

    if (maxIndex > 1) {
      let leftover = paramArray.slice(0, maxIndex);
      leftSearch(leftover);
    }
  }
}
 
// [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
console.log("17 = " + underWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])); 

// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
console.log("10 = " + underWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));

// [7, 0, 1, 3, 4, 1, 2, 1] // 9
console.log("9 = " + underWater([7, 0, 1, 3, 4, 1, 2, 1])); 

// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
console.log("10 = " + underWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); 

// [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
console.log("4 = " + underWater([2, 2, 1, 2, 2, 3, 0, 1, 2])); 

// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
console.log("24 = " + underWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])); 

// [2, 2, 2, 2, 2] // 0
console.log("0 = " + underWater([2, 2, 2, 2, 2])); 

// [6,1,6,1,6]
console.log("10 = " + underWater([6, 1, 6, 1, 6]));

//[9, 1, 6, 1, 6];
console.log("10 = " + underWater([9, 1, 6, 1, 6]));