describe('General Javascript Assertions', function(){
	it('Function are first class object', function(){
		expect(MergeSort instanceof Object).toEqual(true);
	});
});


describe('MergeSort', function(){
	it('Is valid', function(){
		expect(MergeSort).toBeDefined();
	});

	it('Should work with empty array', function(){
		expect(MergeSort([])).toEqual([]);
	});

	it('Should work for sorted array', function(){
		expect(MergeSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it('MergeSort with random array', function(){
		var arr = createRandomArray();
		expect(MergeSort(arr)).toEqual(arr.sort());
	});

	it('Descending order MergeSort with random array', function(){
		var arr = createRandomArray();
		expect(MergeSort(arr, comparator)).toEqual(arr.sort(comparator));
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