(function(global){

	/**
	* Extract keys
	*/
	var extractKeys = function(obj){
		var keys = [], key;
		for(key in obj){
			// if(obj.hasOwnProperty(key)){
			// 	keys.push(key);
			// }
			Object.prototype.hasOwnProperty.call(obj, key) && keys.push(key);
		}
		return keys;
	};

	var sorter = function(a, b){
		return parseFloat(a) - parseFloat(b);
	};

	var findPaths = function(map, start, end, infinity){};

	var extractShortest = function(predecessors, end){};

	var findShortestPath = function(map, nodes){};

	var toArray = function(list, offset){
		return Array.prototype.slice.call(list, offset);
	};

	/**
	* Constructor function
	*/
	var Dijkstra = function(map){
		this.map = map;
	};

	/**
	* Will be accessible by creating new Object of Dijkstra
	*/
	Dijkstra.prototype.findShortestPath = function(start, end){
		return 2;
	};

	/**
	* Will be accessible without creating new Object of Dijkstra
	*/
	Dijkstra.findShortestPath = function(map, start, end){
		return 1;
	};

	global.Dijkstra = Dijkstra;
})(window);