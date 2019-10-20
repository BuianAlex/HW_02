function findMax(array) {
    if (!Array.isArray(array) || array.length === 0) {
      return false;
    }
  
    let maxValue;
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
  
    let minValue;
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
  
    let sumValue = 0;
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
  
    let max = findMax(array);
    let min = findMin(array);
    let newArr = array.map(function (arrItem) {
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
  
    const max = findMax(array);
    const min = findMin(array);
    const sum = calcSum(array);
  
    if (max && min && sum) {
      return {
        max: max,
        min: min,
        sum: sum
      };
    }
  
    return false;
  }

  module.exports = {
    reviewArray,
    swapPlaces
}  