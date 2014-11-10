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
		expect(dijkstra.findShortestPath()).toEqual(2);
	});

	it('Dijkstra method', function(){
		var map = {a:{b:3,c:1},b:{a:2,c:1},c:{a:4,b:1}};
		expect(Dijkstra.findShortestPath()).toEqual(1);
	});
});

describe('Test Dijkstra private functions', function(){

	beforeEach(function(){
		this.obj = {
			a:{b:3,c:1}, b:{a:2,c:1}, c:{a:4,b:1}
		};
		this.testOnly = Dijkstra.__test_only__;
	});

	afterEach(function(){
		this.obj = null;
		this.testOnly = null;
	});

	it('extractKeys function to be defined', function(){
		expect(this.testOnly.extractKeys).toBeDefined();
	});

	it('Extract keys', function(){
		expect(this.testOnly.extractKeys(this.obj)).toEqual(['a', 'b', 'c']);
	});
});