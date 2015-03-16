(function(global){
'use strict';

function comparator(a, b){
  return a - b;
}

function BubbleSort(array, cmp){
  cmp = cmp || comparator;
  var temp;
  for(var i = 0; i < array.length; i += 1){
    for(var j = i; j > 0; j -= 1){
      if(cmp(array[j], array[j-1]) < 0){
        temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
      }
    }
  }
  return array;
}

global.BubbleSort = BubbleSort;

})(window);