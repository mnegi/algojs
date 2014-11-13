[![Build Status](https://travis-ci.org/mnegi/algojs.svg?branch=master)](https://travis-ci.org/mnegi/algojs)

##A Javascript framework with implementation of major computer science algorithms and data structures

Let's make a new javascript framework to implement all the major computer science algorithms and data structures. During this implementation we want to learn the actual algorithms and a way to build javascript framework. The implementation span in following phases:

1. Core JS framework
2. JS unit testing and TDD
3. Visualisation framework in JS
4. Web App using the core and visualisation frameworks alongwith some other technologies for server side coding.

While building the framework we will cover the following topics:

- Javascript TDD using npm, gulp, karma and Jasmine
- JavaScript web frameworks learning
- Saucelab integration for multiple browser testing
- JsHint for quality checks
- Benchmark algorithms
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

----------

##**Part I**

- Coding guidelines
- Minimal framework structure
- TDD for javascript
- Travis-CI integration

##**Part II**
- Saucelab integration
- JsHint for quality

### Coding guidelines
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

----------

## JSHint

* Before committing please run `gulp lint` for javascript precompile linting.
* We are using `.jshintrc` for all jshint configurations.
* Please follow [jshint options](http://www.jshint.com/docs/options/) for documentation and configurations.

----------
## Saucelab Integration

* Need to have a saucelab account and create a sauce.json file having username & password in the root directory of the project.
* Format of sauce.json
```json
{
    "username": "saucelab_username",
    "accessKey": "saucelab_key"
}
```
* Command to trigger our build in saucelab cloud infrastructure `gulp ci`

----------

##**Part III**

- Enhancing core JS framework structure
- Benchmarking algorithms
- Add algorithms

----------

##**Part III**

- Add algorithms
- Enhancing core JS framework structure
- Benchmarking algorithms
- Distribution
- Algorithms analysis

----------

##Authors
- Manohar Negi
- Samar Panda