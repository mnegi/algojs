describe('algojs', function(){

	var sample_arr;

	beforeEach(function(){
		sample_arr = [1, 2, 3, 4, 5, 6];
	});

	afterEach(function(){
		sample_arr = null;
	});

	it('Validate index of a number in a array', function(){
		expect(algojs.linear_search(sample_arr, 4)).toEqual(3);
	});

	it('Search for a number which doesnot exit in array', function(){
		expect(algojs.linear_search(sample_arr, 7)).toEqual(-1);
	});

	it('Is valid', function(){
		expect(sample_arr).toBeDefined();
	});
});