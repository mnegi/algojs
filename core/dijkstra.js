(function(global){

	/**
	* Extract keys
	*/
	var extractKeys = function(obj){
		var keys = [], key;
		for(key in obj){
			if(obj.hasOwnProperty(key)){
				keys.push(key);
			}
		}
		return keys;
	};

	var shorter = function(a, b){
		return parseFloat(a) - parseFloat(b);
	};

	var findPaths = function(){};

	var extractShortest = function(){};

	var findShortestPath = function(){};

	var toArray = function(){};

	/**
	* Constructor function
	*/
	var Dijkstra = function(map){
		this.map = map;
	};

	/**
	* Will be accessible by creating new Object of Dijkstra
	*/
	Dijkstra.prototype.findShortestPath = function(){
		return 2;
	};

	/**
	* Will be accessible without creating new Object of Dijkstra
	*/
	Dijkstra.findShortestPath = function(){
		return 1;
	};

	global.Dijkstra = Dijkstra;
	/* test-block */
	Dijkstra.__test_only__ = {};
	Dijkstra.__test_only__.extractKeys = extractKeys;
	Dijkstra.__test_only__.shorter = shorter;
	Dijkstra.__test_only__.findPaths = findPaths;
	Dijkstra.__test_only__.extractShortest = extractShortest;
	Dijkstra.__test_only__.findShortestPath = findShortestPath;
	Dijkstra.__test_only__.toArray = toArray;
	/* end-test-block */
})(window);