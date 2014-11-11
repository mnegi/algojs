(function(){
	var array_equi = {
		VERSION: '0.0.1',

		authors: ["manohar","samar"],

		arrayEquilibrium: function(values){
			var sum =0, lsum=0, rsum =0; 
			for(var i=0; i<values.length; i++){
				sum+=values[i];
			}
			for(var j=0; j<values.length; j++){ 
				rsum = sum - lsum - values[j];
				if(rsum == lsum){ 
					return j;
				}
				lsum += values[j];
			}
			return -1;
		}
	};

	window.array_equi = array_equi;
})();