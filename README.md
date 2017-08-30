# Testing Example
The purpose of this repository is to act as example for discussing linting, unit testing, and code coverage 
patterns and best practices. The end result should be a set up that we can extract into an archetype to be shared
by all like modules.

## Technologies
This example leverages the following technologies:

* [Jest](https://facebook.github.io/jest): Used for unit testing. It provides a fairly large feature set.
* [Chai](chaijs.com): Enhances Jest assertions. The global `expect` has been augmented to include chai assertions.
* [Sinon](http://sinonjs.org): Used for mocking and spies.
* [ESlint](https://eslint.org): Used for code linting
* [Enzyme](http://airbnb.io/enzyme): Used for React specific unit testing. Contains a ton of useful helpers.


## Best Practices
This article outlines some unit testing best practices. This will help you write good tests! The basic format should be as follows:

* Set up
* Action
* __Single__ assertion

## Commands
The following commands are available in the `package.json`. Below is a list of their purpose.

* `npm run verify`: Used for verifying a module before releasing. If it fails don't release! Delegates to other scripts.
* `npm test`: Delegates to `npm run test:unit`
* `npm run test:unit:clean`: Removes [snapshots](https://facebook.github.io/jest/docs/en/snapshot-testing.html#content) and runs unit tests.
* `npm run test:unit` runs unit tests
* `npm run lint`: Performs static analysis and notifies you of issues
* `npm run cover:unit`: Generates code coverage

## Currently Exploring
The following is currently being explored.

* [Prettier](https://prettier.io) All code should conform!

## Questions or Feedback
Please open issues against this repository if you have questions or concerns, so that we have a history of why decisions were made.