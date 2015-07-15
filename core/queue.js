function Queue() {

	// Initialize the queue and the offset
	var queue = [];
	var offset = 0;

	// Retuens of the length of the queue
	this.getLength = function(){
		return queue.length - offset;
	};

	// Returns true if the queue is empty
	this.isEmpty = function(){
		return queue.length === 0;
	};

	// Enqueues the item
	this.enqueue = function(item){
		queue.push(item);
	};

	// Dequeues a item and returns it. If empty, undefined is returned.
	this.dequeue = function(){
		if(queue.length === 0) return undefined;

		var item = queue[offset];

		if( ++offset * 2 > queue.length){
			queue = queue.slice(offset);
			offset = 0;
		}

		return item;
	};

	// Returns a item from the front of the queue
	this.peek = function(){
		return queue.length > 0 ? queue[offset] : undefined;
	};
}