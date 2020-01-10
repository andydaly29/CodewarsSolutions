function find_average(array) {
    // your code here
    var sum = 0;;
    for(var i = 0;i<array.length;i++){
     sum+=array[i];
    }
    return sum/array.length;
  }