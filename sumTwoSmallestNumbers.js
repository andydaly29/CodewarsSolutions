/**
 * @function sumTwoSmallestNumbers
 * @param  {type} numbers {array of numbers}
 * @return {type} {Sum of two lowest positive integers}
 */
function sumTwoSmallestNumbers(numbers) {  
    //Code here
    var lowest1 = 0;
    var lowest2 = 0;
    
    //get the lowest number
    lowest1 = Math.min.apply(Math, numbers);
    
    //remove the lowest number from the array
    var index = numbers.indexOf(lowest1);
    if (index >= 0) {
      numbers.splice( index, 1 );
    }
    
    //get the next lowest number
    lowest2 = Math.min.apply(Math, numbers);
    return lowest1+lowest2;
  }