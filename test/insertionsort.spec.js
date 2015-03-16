describe("Basic sanity check", function(){
	it('Check if InsertionSort class exists', function(){
		expect(InsertionSort instanceof Object).toEqual(true);
	});
});

describe('InsertionSort', function(){
	it('Is valid', function(){
		expect(InsertionSort).toBeDefined();
	});

	it('Should work with empty array', function(){
		expect(InsertionSort([])).toEqual([]);
	});

	it('Should work for sorted array', function(){
		expect(InsertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	});

	it('InsertionSort with random array', function(){
		var arr = createRandomArray();
		expect(InsertionSort(arr)).toEqual(arr.sort());
	});

	it('Descending order InsertionSort with random array', function(){
		var arr = createRandomArray();
		expect(InsertionSort(arr, comparator)).toEqual(arr.sort(comparator));
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