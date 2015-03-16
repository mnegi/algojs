describe('General Javascript Assertions', function(){
	it('Function are first class object', function(){
		expect(SelectionSort instanceof Object).toEqual(true);
	});
});

describe('SelectionSort', function(){
	it('Is valid', function(){
		expect(SelectionSort).toBeDefined();
	});

	it('Should work with empty array', function(){
		expect(SelectionSort([])).toEqual([]);
	});

	// it('Should work for sorted array', function(){
	// 	expect(SelectionSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
	// });

	it('SelectionSort with random array', function(){
		var arr = createRandomArray();
		expect(SelectionSort(arr)).toEqual(arr.sort());
	});

	it('Descending order SelectionSort with random array', function(){
		var arr = createRandomArray();
		expect(SelectionSort(arr, comparator)).toEqual(arr.sort(comparator));
	});

	function comparator(a, b){
		return b - a;
	}

	function createRandomArray(config){
		config = config || {};
		var size = config.size || 10;
		var multiplier = config.multiplier || 100;
		var precesion = config.precesion || 0;
		var result = [];

		for(var i = size; i>0; i -= 1){
			result.push(parseFloat(Math.random() * multiplier).toFixed(precesion));
		}
		return result;
	}
});