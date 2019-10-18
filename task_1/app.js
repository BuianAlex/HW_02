//ToDo
//  Найти в массиве: sum, min and max, заменить min and max,
//  используя методы, изученные на занятии. Создать функцию 
//  которая возвращает все тти значения в объекте.

"use strict";

function findMax(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return false;
  }

  var maxValue;
  array.forEach(function (arrItem) {
    if (!isNaN(arrItem) && typeof arrItem === 'number') {
      if (maxValue === undefined) {
        maxValue = arrItem;
      } else {
        if (maxValue < arrItem) {
          maxValue = arrItem;
        }
      }
    }
  });

  if (maxValue !== undefined) {
    return maxValue;
  }

  return false;
}

function findMin(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return false;
  }

  var minValue;
  array.forEach(function (arrItem) {
    if (!isNaN(arrItem) && typeof arrItem === 'number') {
      if (minValue === undefined) {
        minValue = arrItem;
      } else {
        if (minValue > arrItem) {
          minValue = arrItem;
        }
      }
    }
  });

  if (minValue !== undefined) {
    return minValue;
  }

  return false;
}

function calcSum(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return false;
  }

  var sumValue = 0;
  array.forEach(function (arrItem) {
    if (!isNaN(arrItem) && typeof arrItem === 'number') {
      sumValue = sumValue + arrItem;
    }
  });

  if (sumValue !== 0) {
    return sumValue;
  }

  return false;
}

function swapPlaces(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return false;
  }

  var max = findMax(array);
  var min = findMin(array);
  var newArr = array.map(function (arrItem) {
    if (arrItem === min) {
      return max;
    } else if (arrItem === max) {
      return min;
    } else {
      return arrItem;
    }
  });
  return newArr;
}

function reviewArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return false;
  }

  var max = findMax(array);
  var min = findMin(array);
  var sum = calcSum(array);

  if (max && min && sum) {
    return {
      max: max,
      min: min,
      sum: sum
    };
  }

  return false;
}

var test1 = [];
console.log("test1= " + reviewArray(test1));
var test2 = ["sdds", "1", "sds"];
console.log("test2= " + reviewArray(test2));
var test3 = [-1, -8, -2];
console.log("test3= " + JSON.stringify(reviewArray(test3)));
var test4 = [1, 7, 3];
console.log("test4= " + JSON.stringify(reviewArray(test4)));
var test5 = [1, undefined, 3, 5, -3];
console.log("test5= " + JSON.stringify(reviewArray(test5)));
var test6 = [1, NaN, 3, 5, -3];
console.log("test6= " + JSON.stringify(reviewArray(test6)));
var test7 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];
console.log("test7= " + JSON.stringify(reviewArray(test7)));
console.log("inputArr " + test7);
console.log("Swaped " + swapPlaces(test7));


 



