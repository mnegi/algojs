[![Build Status](https://travis-ci.org/mnegi/algojs.svg?branch=master)](https://travis-ci.org/mnegi/algojs)

##A Javascript framework with implementation of major computer science algorithms and data structures
----------
Let's make a new javascript framework to implement all the major computer science algorithms and data structures. During this implementation we want to learn the actual algorithms and a way to build javascript framework. The implementation span in following phases:

1. Core JS framework
2. JS unit testing and TDD
3. Visualisation framework in JS
4. Web App using the core and visualisation frameworks alongwith some other technologies for server side coding.

While building the framework we will cover the following topics:

- Javascript TDD using npm, gulp, karma and Jasmine
- JavaScript web frameworks learning
- Library architectures
- Functional programming
- Selectors
- Events
- Ajax
- Animation
- Module loading
- Plugin architecture
- Browser capability detection
- Clean, reusable API design
- Benchmarking and performance
- Writing minifier-friendly JavaScript

**Part I**

The coding guidelines and the practices to develop this framework:

1. **Verbose**: Variable and method names should be verbose so things are easy to find and understand
2. **Portable**: Browsers and console should be catered for
3. **Explicit**: Code should be quick to understand
4. **Comments**: Let’s keep comment noise down. Comments should be succinct. TODO and FIXME are acceptable.
5. **Simple**: Keep code simple. Let’s not bore readers!
6. **Indentation**: Two spaces
7. **Semicolons**: People might want to minify this library — let’s keep simicolons!
8. **Quality**: JsLint and reader comments!
9. **Testing**: Test first development for both browsers and console
10. **Versioning**: GitHub to the rescue


## The bare minimum framework
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

## Let's get the TDD done
To make this work we have added **package.json**, **karma.conf.js**, **gulpfile.js** and a spec file test/**algojs.spec.js**. Peek into the repo for more details.

```shell
## To install dependency run the below command.
npm install

## To execute test
gulp test

## Running tdd and watching file changes
gulp tdd
```

## Travis-CI integration
Now that we have TDD in place, the next thing we would like to do is to integrate it travis-ci. Register with the travis-ci.org, may be use github user id to make things really simple. Select the repo and get started.
Also we will need a .YML file. This is how our **.travis.yml** file.

```yml
language: node_js
node_js:
  - "0.10"
before_script:
  - export DISPLAY=:99.0
  - sh -e /etc/init.d/xvfb start
notifications:
  email:
    - samar.panda84@gmail.com
    - manohar.negi@gmail.com
```
## Let the build status get reflected

For us its just to add the below markdown in the **README.md** file
```markdwon
[![Build Status](https://travis-ci.org/mnegi/algojs.svg?branch=master)](https://travis-ci.org/mnegi/algojs)
```

##Authors
-- Manohar Negi
-- Samar Panda