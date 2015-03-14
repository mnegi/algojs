describe('General Javascript Assertions', function(){
	it('Function are first class object', function(){
		expect(BubbleSort instanceof Object).toEqual(true);
	});
});

describe('BubbleSort', function(){
	it('Is valid', function(){
		expect(BubbleSort).toBeDefined();
	});

	it('BubbleSort prototype', function(){
		var arr = [3, 2, 10, 6, 16];
		var sp = BubbleSort(arr);
		expect(sp).toEqual([2, 3, 6, 10, 16]);
	});
});

