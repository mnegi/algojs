(function(global){
'use strict';

function comparator(a, b){
  return a - b;
}

function MergeSort(array, cmp, start, end){
	cmp = cmp || comparator;
	start = start || 0;
	end = end || array.length;
	if(Math.abs(end - start) <= 1){
		return [];
	}
	var middle = Math.ceil((start + end)/2);

	MergeSort(array, cmp, start, middle);
	MergeSort(array, cmp, middle, end);

	return MergeSort.merge(array, cmp, start, middle, end);
}

MergeSort.merge = function (array, cmp, start, middle, end){
	var left = [];
	var right = [];
	var leftSize = middle - start;
	var rightSize = end - middle;
	var maxSize = Math.max(leftSize, rightSize);
	var size = end - start;
	var i;

	//Split in left and right arrays
	for(i=0; i<maxSize; i++){
		if(i < leftSize){
			left[i] = array[start + i];
		}
		if(i < rightSize){
			right[i] = array[middle + i];
		}
	}
	i = 0;
	while(i < size){
		if(left.length && right.length){
			if(cmp(left[0], right[0]) > 0){
				array[start + i] = right.shift();
			}else{
				array[start + i] = left.shift();
			}
		}else if(left.length){
			array[start + i] = left.shift();
		}else{
			array[start + i] = right.shift();
		}
		i++;
	}
	return array;
};

global.MergeSort = MergeSort;

})(window);