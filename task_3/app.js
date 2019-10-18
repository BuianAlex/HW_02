"use strict";

function changeCalculator(price, money) {
  var t0 = Date.now();
  var restMoney = money - price;
  var maxBanknotes = 30;
  var minBanknotes = 2;
  var cashDesk = [1, 2, 5, 10, 20, 50, 100];
  cashDesk.sort(function (a, b) {
    return a + b;
  }); //старт від найбільшої купюри

  var possibleVariants = [];
  var tempVariant = {};
  var iteration = 0;
  var beforeFilter = 0;
  var calcBanknote = 0;
  var totalRes = 0;
  calc(0);
  var t1 = Date.now(); //час кінця роботи

  console.log(JSON.stringify(possibleVariants));
  console.log("Call took " + (t1 - t0) + " milliseconds.");
  console.log('iterations = ' + iteration);
  console.log('tVariants = ' + beforeFilter);
  console.log('fVariants = ' + possibleVariants.length);

  function calc(banknoteKey) {
    if (banknoteKey < cashDesk.length) {
      //максимальна можлива кількість купюр номіналу   
      var max = Math.floor(restMoney / cashDesk[banknoteKey]) <= maxBanknotes ? Math.floor(restMoney / cashDesk[banknoteKey]) : maxBanknotes;

      for (var index = 0; index <= max; index++) {
        tempVariant[cashDesk[banknoteKey]] = index; // записуємо у тимчасовий  об'єкт

        if (banknoteKey + 1 === cashDesk.length) {
          //якщо остання банкнота у масиві
          iteration++;

          for (var val in tempVariant) {
            calcBanknote += tempVariant[val];
            totalRes += val * tempVariant[val];
          } //сума всих банкнот та кількість


          if (totalRes === restMoney) {
            beforeFilter++;
          }

          if (calcBanknote <= maxBanknotes && totalRes === restMoney) {
            //фільтр кількіть та сума   
            var prepVariant = {};

            for (var _val in tempVariant) {
              if (tempVariant[_val] > 0) {
                prepVariant[_val] = tempVariant[_val];
              }
            } //фільтр нульових значень купюр


            if (Object.keys(prepVariant).length >= minBanknotes) {
              possibleVariants.push(prepVariant);
              console.log(possibleVariants.length);
            } // збереження варіанту

          }

          calcBanknote = 0;
          totalRes = 0;
        }

        calc(banknoteKey + 1);
      }
    }

    return false;
  }
}

changeCalculator(5, 10);

