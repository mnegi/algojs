/*
global window
*/
(function(global){
	var algojs = {
		VERSION: '0.0.1',

		authors: ["manohar","samar"],

		linearSearch: function(values, target){
			for(var i=0; i<values.length; i++){
				if(values[i] === target){
					return i;
				}
			}
			return -1;
		}
	};

	if(global.algojs){
		throw new Error('algojs has already been defined');
	}else{
		global.algojs = algojs;
	}
})(typeof window == 'undefined' ? this : window);