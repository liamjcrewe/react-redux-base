**Note: this project has been deprecated.**

**Long story short; only use Redux if you have a good reason to! There are plenty of good articles online about this (check out [this one](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) by the creator of Redux), and feel free to check out my other project [jsfactory](https://github.com/liamjcrewe/jsfactory) for generating modern JS apps.**

---

# Base React/Redux App

This provides basic core structure for a react/redux Javascript app. The base app simply includes a counter that can be incremented as an example of functionality.

## Basic setup
Run from project root:
* `yarn` or `npm i`.
* `yarn build` or `npm run build`.
* `http-server public/` or your equivalent to create a local server for your app.

### To build for production
Run `yarn build` or `npm run build`.

### To build and watch for changes in development
Run `yarn watch` or `npm run watch`. This will automatically watch for changes and rebuild when it finds a change.

## Standard
Run `yarn test` or `npm run test` to run a [JavaScript Standard Style](https://standardjs.com/) check. Note this is automatically run when `watch` detects changes.
