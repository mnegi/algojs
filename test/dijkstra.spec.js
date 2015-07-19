describe('General Javascript Assertions', function(){
	it('Function are first class object', function(){
		expect(Dijkstra instanceof Object).toEqual(true);
	});
});

describe('Dijkstra', function(){

	it('Is valid', function(){
		expect(Dijkstra).toBeDefined();
	});

	it('Dijkstra prototype', function(){
		var map = {a:{b:3,c:1},b:{a:2,c:1},c:{a:4,b:1}};
		var dijkstra = new Dijkstra(map);
		// expect(dijkstra.findShortestPath('a', 'c')).toEqual(['c']);
		expect(dijkstra.findShortestPath()).toEqual(2);
	});

	it('Dijkstra method', function(){
		var map = {a:{b:3,c:1},b:{a:2,c:1},c:{a:4,b:1}};
		// expect(Dijkstra.findShortestPath(map, ['c','a','b'])).toEqual(['b']);
		expect(Dijkstra.findShortestPath()).toEqual(1);
	});
});

describe('Test Dijkstra private functions', function(){

	beforeEach(function(){
		this.obj = {
			a:{b:3,c:1}, b:{a:2,c:1}, c:{a:4,b:1}
		};
		this.arr = [1, 2, 3, 4, 5, 6];
		this.testOnly = Dijkstra.__test_only__;
	});

	afterEach(function(){
		this.obj = null;
		this.arr = null;
		this.testOnly = null;
	});

	it('Tracks that a specific method has been called.', function(){
		spyOn(this.testOnly, 'sorter');
		this.testOnly.sorter(5, 3);
		expect(this.testOnly.sorter).toHaveBeenCalled();
	});

	it('Function to have been called with', function(){
		spyOn(this.testOnly, 'sorter');
		this.testOnly.sorter(5, 3);
		expect(this.testOnly.sorter).toHaveBeenCalledWith(5, 3);
	});

	it('Function call count', function(){
		spyOn(this.testOnly, 'sorter');
		this.testOnly.sorter(5, 3);
		expect(this.testOnly.sorter.callCount).toEqual(1);
	});

	it('Function call parameters', function(){
		spyOn(this.testOnly, 'sorter');
		this.testOnly.sorter(5, 3);
		expect(this.testOnly.sorter.mostRecentCall.args).toEqual([5, 3]);
	});

	it('Retun value sorter function', function(){
		expect(this.testOnly.sorter(5,3)).toEqual(5-3);
	});

	it('extractKeys function to be defined', function(){
		expect(this.testOnly.extractKeys).toBeDefined();
	});

	it('Extract keys', function(){
		expect(this.testOnly.extractKeys(this.obj)).toEqual(['a', 'b', 'c']);
	});

	it('sorter function to be defined', function(){
		expect(this.testOnly.sorter).toBeDefined();
	});

	it('Call sorter function', function(){
		expect(this.testOnly.sorter(5, 2)).toEqual(3);
	});

	/**
	* toArray private function
	*/
	it('toArray to be defined', function(){
		expect(this.testOnly.toArray).toBeDefined();
	});

	it('Use toArray function', function(){
		expect(this.testOnly.toArray(this.arr, 5)).toEqual([6]);
	});
});