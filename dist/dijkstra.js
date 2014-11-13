(function(global){
	var extractKeys = function(obj){
		var keys = [], key;
		for(key in obj){
			if(obj.hasOwnProperty(key)){
				keys.push(key);
			}
		}
		return keys;
	};
	var dijkstra = {

	};
	global.dijkstra = dijkstra;
})(window);