describe('array_equi', function(){

	beforeEach(function(){
		this.sample_arr = [-1, 3, -4, 5, 1, -6, 2, 1];
	});

	afterEach(function(){
		this.sample_arr = null;
	});

	it('Validate array eqilibrium to be 1', function(){
		expect(array_equi.arrayEquilibrium(this.sample_arr)).toEqual(1);
	});

	

	it('Is valid', function(){
		expect(this.sample_arr).toBeDefined();
	});
});