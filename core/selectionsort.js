(function(global){
'use strict';

function comparator(a, b){
	return a - b;
}

var SelectionSort = function(array, cmp){
	cmp = cmp || comparator;
	var min,
		idx,
		temp;
	for(var i = 0; i < array.length; i++){
		idx = 1;
		min = array[i];
		for(var j = i + 1; j < array.length; j++){
			if(cmp(min, array[j]) > 0){
				min = array[j];
				idx = j;
			}
		}
		temp = array[i];
		array[i] = min;
		array[idx] = temp;
	}
	return array;
};

global.SelectionSort = SelectionSort;

})(window);