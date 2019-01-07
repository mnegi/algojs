### The bare minimum framework
We have added the very basic structure for the framework. Here is the code snippet (core/**algojs.js**):

```JavaScript
(function(global){
	var algojs = {
		VERSION: '0.0.1',

		authors: ["manohar","samar"],

		/* finds an element in the array using linear search algorithm */
		linear_search: function(values, target){
			for(var i=0; i<values.length; i++){
				if(values[i] === target)
					return i;
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
```

### Let's get the TDD done
To make this work we have added **package.json**, **karma.conf.js**, **gulpfile.js** and a spec file test/**algojs.spec.js**. Peek into the repo for more details.

```shell
## To install dependency run the below command.
npm install

## To execute test
gulp test

## Running tdd and watching file changes
gulp tdd
```

### Travis-CI integration
Now that we have TDD in place, the next thing we would like to do is to integrate it travis-ci. Register with the travis-ci.org, may be use github user id to make things really simple. Select the repo and get started.
Also we will need a .YML file. This is how our **.travis.yml** file.

```yml
language: node_js
node_js:
  - "10.13.0"
before_script:
  - export DISPLAY=:99.0
  - sh -e /etc/init.d/xvfb start
notifications:
  email:
    - er.samarpanda@gmail.com
    - manohar.negi@gmail.com
```
### Show the build status in this page

For us its just to add the below markdown in the **README.md** file
```markdwon
[![Build Status](https://travis-ci.org/mnegi/algojs.svg?branch=master)](https://travis-ci.org/mnegi/algojs)
```
