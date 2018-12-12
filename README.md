# Raka-Settya-Starter Mobile React Native

## Starter project for using:

# 1. Redux

# <a href='http://redux.js.org'><img src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67' height='60' alt='Redux Logo' aria-label='redux.js.org' /></a>

Redux is a predictable state container for JavaScript apps.  
(Not to be confused with a WordPress framework – [Redux Framework](https://reduxframework.com/).)

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as [live code editing combined with a time traveling debugger](https://github.com/reduxjs/redux-devtools).

You can use Redux together with [React](https://reactjs.org), or with any other view library.  
It is tiny (2kB, including dependencies).

[![build status](https://img.shields.io/travis/reduxjs/redux/master.svg?style=flat-square)](https://travis-ci.org/reduxjs/redux)
[![npm version](https://img.shields.io/npm/v/redux.svg?style=flat-square)](https://www.npmjs.com/package/redux)
[![npm downloads](https://img.shields.io/npm/dm/redux.svg?style=flat-square)](https://www.npmjs.com/package/redux)
[![redux channel on discord](https://img.shields.io/badge/discord-%23redux%20%40%20reactiflux-61dafb.svg?style=flat-square)](https://discord.gg/0ZcbPKXt5bZ6au5t)
[![Changelog #187](https://img.shields.io/badge/changelog-%23187-lightgrey.svg?style=flat-square)](https://changelog.com/187)

## Learn Redux

We have a variety of resources available to help you learn Redux, no matter what your background or learning style is.

### Just the Basics

If you're brand new to Redux and want to understand the basic concepts, see:

- The **[Motivation](https://redux.js.org/introduction/motivation)** behind building Redux, the **[Core Concepts](https://redux.js.org/introduction/coreconcepts)**, and the **[Three Principles](https://redux.js.org/introduction/threeprinciples)**.
- The **[basic tutorial in the Redux docs](https://redux.js.org/basics)**
- Redux creator Dan Abramov's **free ["Getting Started with Redux" video series](https://egghead.io/series/getting-started-with-redux)** on Egghead.io
- Redux co-maintainer Mark Erikson's **["Redux Fundamentals" slideshow](http://blog.isquaredsoftware.com/2018/03/presentation-reactathon-redux-fundamentals/)** and **[list of suggested resources for learning Redux](http://blog.isquaredsoftware.com/2017/12/blogged-answers-learn-redux/)**
- If you learn best by looking at code and playing with it, check out our list of **[Redux example applications](https://redux.js.org/introduction/examples)**, available as separate projects in the Redux repo, and also as interactive online examples on CodeSandbox.
- The **[Redux Tutorials](https://github.com/markerikson/react-redux-links/blob/master/redux-tutorials.md)** section of the **[React/Redux links list](https://github.com/markerikson/react-redux-links)**. Here's a top list of our recommended tutorials:
  - Dave Ceddia's posts [What Does Redux Do? (and when should you use it?)](https://daveceddia.com/what-does-redux-do/) and [How Redux Works: A Counter-Example](https://daveceddia.com/how-does-redux-work/) are a great intro to the basics of Redux and how to use it with React, as is this post on [React and Redux: An Introduction](http://jakesidsmith.com/blog/post/2017-11-18-redux-and-react-an-introduction/).
  - Valentino Gagliardi's post [React Redux Tutorial for Beginners: Learning Redux in 2018](https://www.valentinog.com/blog/react-redux-tutorial-beginners/) is an excellent extended introduction to many aspects of using Redux.
  - The CSS Tricks article [Leveling Up with React: Redux](https://css-tricks.com/learning-react-redux/) covers the Redux basics well.
  - This [DevGuides: Introduction to Redux](http://devguides.io/redux/) tutorial covers several aspects of Redux, including actions, reducers, usage with React, and middleware.

### Intermediate Concepts

Once you've picked up the basics of working with actions, reducers, and the store, you may have questions about topics like working with asynchronous logic and AJAX requests, connecting a UI framework like React to your Redux store, and setting up an application to use Redux:

- The **["Advanced" docs section](https://redux.js.org/advanced)** covers working with async logic, middleware, routing.
- The Redux docs **["Learning Resources"](https://redux.js.org/introduction/learning-resources)** page points to recommended articles on a variety of Redux-related topics.
- Sophie DeBenedetto's 8-part **[Building a Simple CRUD App with React + Redux](http://www.thegreatcodeadventure.com/building-a-simple-crud-app-with-react-redux-part-1/)** series shows how to put together a basic CRUD app from scratch.

### Real-World Usage

Going from a TodoMVC app to a real production application can be a big jump, but we've got plenty of resources to help:

- Redux creator Dan Abramov's **[free "Building React Applications with Idiomatic Redux" video series](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)** builds on his first video series and covers topics like middleware, routing, and persistence.
- The **[Redux FAQ](https://redux.js.org/faq)** answers many common questions about how to use Redux, and the **["Recipes" docs section](https://redux.js.org/recipes)** has information on handling derived data, testing, structuring reducer logic, and reducing boilerplate.
- Redux co-maintainer Mark Erikson's **["Practical Redux" tutorial series](http://blog.isquaredsoftware.com/series/practical-redux/)** demonstrates real-world intermediate and advanced techniques for working with React and Redux (also available as **[an interactive course on Educative.io](https://www.educative.io/collection/5687753853370368/5707702298738688)**).
- The **[React/Redux links list](https://github.com/markerikson/react-redux-links)** has categorized articles on working with [reducers and selectors](https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md), [managing side effects](https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md), [Redux architecture and best practices](https://github.com/markerikson/react-redux-links/blob/master/redux-architecture.md), and more.
- Our community has created thousands of Redux-related libraries, addons, and tools. The **["Ecosystem" docs page](https://redux.js.org/introduction/ecosystem)** lists our recommendations, and there's a complete listing available in the **[Redux addons catalog](https://github.com/markerikson/redux-ecosystem-links)**.
- If you're looking to learn from actual application codebases, the addons catalog also has a list of **[purpose-built examples and real-world applications](https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md)**.

Finally, Mark Erikson is teaching a series of **[Redux workshops through Workshop.me](#redux-workshops)**. Check the [workshop schedule](https://workshop.me/?a=mark) for upcoming dates and locations.

### Help and Discussion

The **[#redux channel](https://discord.gg/0ZcbPKXt5bZ6au5t)** of the **[Reactiflux Discord community](http://www.reactiflux.com)** is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!

## Before Proceeding Further

Redux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation. Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it.

Here are some suggestions on when it makes sense to use Redux:

- You have reasonable amounts of data changing over time
- You need a single source of truth for your state
- You find that keeping all your state in a top-level component is no longer sufficient

Yes, these guidelines are subjective and vague, but this is for good reason. The point at which you should integrate Redux into your application is different for every user and different for every application.

> **For more thoughts on how Redux is meant to be used, see:**<br>
>
> - **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**<br>
> - **[The Tao of Redux, Part 1 - Implementation and Intent](http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**<br>
> - **[The Tao of Redux, Part 2 - Practice and Philosophy](http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/)**
> - **[Redux FAQ](https://redux.js.org/faq)**

## Developer Experience

Dan Abramov (author of Redux) wrote Redux while working on his React Europe talk called [“Hot Reloading with Time Travel”](https://www.youtube.com/watch?v=xsSnOQynTHs). His goal was to create a state management library with a minimal API but completely predictable behavior. Redux makes it possible to implement logging, hot reloading, time travel, universal apps, record and replay, without any buy-in from the developer.

## Influences

Redux evolves the ideas of [Flux](http://facebook.github.io/flux/), but avoids its complexity by taking cues from [Elm](https://github.com/evancz/elm-architecture-tutorial/).  
Even if you haven't used Flux or Elm, Redux only takes a few minutes to get started with.

## Installation

To install the stable version:

```
npm install --save redux
```

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.

If you're not, you can [access these files on unpkg](https://unpkg.com/redux/), download them, or point your package manager to them.

Most commonly, people consume Redux as a collection of [CommonJS](https://github.com/webpack/docs/wiki/commonjs) modules. These modules are what you get when you import `redux` in a [Webpack](https://webpack.js.org/), [Browserify](http://browserify.org/), or a Node environment. If you like to live on the edge and use [Rollup](https://rollupjs.org), we support that as well.

If you don't use a module bundler, it's also fine. The `redux` npm package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/redux/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a [`<script>` tag](https://unpkg.com/redux/dist/redux.js) on the page, or [tell Bower to install it](https://github.com/reduxjs/redux/pull/1181#issuecomment-167361975). The UMD builds make Redux available as a `window.Redux` global variable.

The Redux source code is written in ES2015 but we precompile both CommonJS and UMD builds to ES5 so they work in [any modern browser](http://caniuse.com/#feat=es5). You don't need to use Babel or a module bundler to [get started with Redux](https://github.com/reduxjs/redux/blob/master/examples/counter-vanilla/index.html).

### Complementary Packages

Most likely, you'll also need [the React bindings](https://github.com/reduxjs/react-redux) and [the developer tools](https://github.com/reduxjs/redux-devtools).

```
npm install --save react-redux
npm install --save-dev redux-devtools
```

Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like [Webpack](https://webpack.js.org/) and [Browserify](http://browserify.org/) for the most comfortable development experience.

## The Gist

The whole state of your app is stored in an object tree inside a single _store_.  
The only way to change the state tree is to emit an _action_, an object describing what happened.  
To specify how the actions transform the state tree, you write pure _reducers_.

That's it!

```js
import { createStore } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
```

Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called _actions_. Then you write a special function called a _reducer_ to decide how every action transforms the entire application's state.

If you're coming from Flux, there is a single important difference you need to understand. Redux doesn't have a Dispatcher or support many stores. Instead, there is just a single store with a single root reducing function. As your app grows, instead of adding stores, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components.

This architecture might seem like an overkill for a counter app, but the beauty of this pattern is how well it scales to large and complex apps. It also enables very powerful developer tools, because it is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action.

## Learn Redux from Its Authors

### Redux Video Tutorials by Dan Abramov

#### Getting Started with Redux

**[Getting Started with Redux](https://egghead.io/series/getting-started-with-redux)** is a video course consisting of 30 videos narrated by [Dan Abramov](https://twitter.com/dan_abramov), author of Redux. It is designed to complement the “Basics” part of the docs while bringing additional insights about immutability, testing, Redux best practices, and using Redux with React. **This course is free and will always be.**

> [“Great course on egghead.io by @dan_abramov - instead of just showing you how to use #redux, it also shows how and why redux was built!”](https://twitter.com/sandrinodm/status/670548531422326785)  
> Sandrino Di Mattia

> [“Plowing through @dan_abramov 'Getting Started with Redux' - its amazing how much simpler concepts get with video.”](https://twitter.com/chrisdhanaraj/status/670328025553219584)  
> Chris Dhanaraj

> [“This video series on Redux by @dan_abramov on @eggheadio is spectacular!”](https://twitter.com/eddiezane/status/670333133242408960)  
> Eddie Zaneski

> [“Come for the name hype. Stay for the rock solid fundamentals. (Thanks, and great job @dan_abramov and @eggheadio!)”](https://twitter.com/danott/status/669909126554607617)  
> Dan

> [“This series of videos on Redux by @dan_abramov is repeatedly blowing my mind - gunna do some serious refactoring”](https://twitter.com/gelatindesign/status/669658358643892224)  
> Laurence Roberts

So, what are you waiting for?

#### [Watch the free "Getting Started with Redux" video series](https://egghead.io/series/getting-started-with-redux)

> Note: If you enjoyed Dan's course, consider supporting Egghead by [buying a subscription](https://egghead.io/pricing). Subscribers have access to the source code of every example in my videos and tons of advanced lessons on other topics, including JavaScript in depth, React, Angular, and more. Many [Egghead instructors](https://egghead.io/instructors) are also open source library authors, so buying a subscription is a nice way to thank them for the work that they've done.

#### Building React Applications with Idiomatic Redux

The **[Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)** course is a second free video series by Dan Abramov. It picks up where the first series left off, and covers practical production ready techniques for building your React and Redux applications: advanced state management, middleware, React Router integration, and other common problems you are likely to encounter while building applications for your clients and customers. As with the first series, **this course will always be free**.

#### [Watch the free "Idiomatic Redux" video series](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

### Practical Redux course

**[Practical Redux](https://www.educative.io/collection/5687753853370368/5707702298738688/)** is a paid interactive course by Redux co-maintainer [Mark Erikson](https://twitter.com/acemarke). The course is designed to show how to apply the basic concepts of Redux to building something larger than a TodoMVC application. It includes real-world topics like:

- Adding Redux to a new Create-React-App project and configuring Hot Module Replacement for faster development
- Controling your UI behavior with Redux
- Using the Redux-ORM library to manage relational data in your Redux store
- Building a master/detail view to display and edit data
- Writing custom advanced Redux reducer logic to solve specific problems
- Optimizing performance of Redux-connected form inputs

And much more!

The course is based on Mark's original free **["Practical Redux" blog tutorial series](http://blog.isquaredsoftware.com/series/practical-redux/)**, but with updated and improved content.

### Redux Fundamentals Workshop

Redux co-maintainer [Mark Erikson](https://twitter.com/acemarke) has put together a [**Redux Fundamentals workshop**, and slides are available here](https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/). They cover:

- The history and purpose of Redux
- Reducers, actions, and working with a Redux store
- Using Redux with React
- Using and writing Redux middleware
- Working with AJAX calls and other side effects
- Unit testing Redux apps
- Real-world Redux app structure and development

## Documentation

- [Introduction](http://redux.js.org/introduction/index.html)
- [Basics](http://redux.js.org/basics/index.html)
- [Advanced](http://redux.js.org/advanced/index.html)
- [Recipes](http://redux.js.org/recipes/index.html)
- [FAQ](http://redux.js.org/FAQ.html)
- [Troubleshooting](http://redux.js.org/Troubleshooting.html)
- [Glossary](http://redux.js.org/Glossary.html)
- [API Reference](http://redux.js.org/api/index.html)

For PDF, ePub, and MOBI exports for offline reading, and instructions on how to create them, please see: [paulkogel/redux-offline-docs](https://github.com/paulkogel/redux-offline-docs).

For Offline docs, please see: [devdocs](http://devdocs.io/redux/)

## Examples

Almost all examples have a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online.

- [**Counter Vanilla**](https://redux.js.org/introduction/examples#counter-vanilla): [Source](https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla)
- [**Counter**](https://redux.js.org/introduction/examples#counter): [Source](https://github.com/reduxjs/redux/tree/master/examples/counter) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter)
- [**Todos**](https://redux.js.org/introduction/examples#todos): [Source](https://github.com/reduxjs/redux/tree/master/examples/todos) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos)
- [**Todos with Undo**](https://redux.js.org/introduction/examples#todos-with-undo): [Source](https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos-with-undo)
- [**TodoMVC**](https://redux.js.org/introduction/examples#todomvc): [Source](https://github.com/reduxjs/redux/tree/master/examples/todomvc) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc)
- [**Shopping Cart**](https://redux.js.org/introduction/examples#shopping-cart): [Source](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart)
- [**Tree View**](https://redux.js.org/introduction/examples#tree-view): [Source](https://github.com/reduxjs/redux/tree/master/examples/tree-view) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/tree-view)
- [**Async**](https://redux.js.org/introduction/examples#async): [Source](https://github.com/reduxjs/redux/tree/master/examples/async) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/async)
- [**Universal**](https://redux.js.org/introduction/examples#universal): [Source](https://github.com/reduxjs/redux/tree/master/examples/universal)
- [**Real World**](https://redux.js.org/introduction/examples#real-world): [Source](https://github.com/reduxjs/redux/tree/master/examples/real-world) | [Sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/real-world)

If you're new to the NPM ecosystem and have troubles getting a project up and running, or aren't sure where to paste the gist above, check out [simplest-redux-example](https://github.com/jackielii/simplest-redux-example) that uses Redux together with React and Browserify.

## Testimonials

> [“Love what you're doing with Redux”](https://twitter.com/jingc/status/616608251463909376)  
> Jing Chen, creator of Flux

> [“I asked for comments on Redux in FB's internal JS discussion group, and it was universally praised. Really awesome work.”](https://twitter.com/fisherwebdev/status/616286955693682688)  
> Bill Fisher, author of Flux documentation

> [“It's cool that you are inventing a better Flux by not doing Flux at all.”](https://twitter.com/andrestaltz/status/616271392930201604)  
> André Staltz, creator of Cycle

## Thanks

- [The Elm Architecture](https://github.com/evancz/elm-architecture-tutorial) for a great intro to modeling state updates with reducers;
- [Turning the database inside-out](https://www.confluent.io/blog/turning-the-database-inside-out-with-apache-samza/) for blowing my mind;
- [Developing ClojureScript with Figwheel](https://www.youtube.com/watch?v=j-kj2qwJa_E) for convincing me that re-evaluation should “just work”;
- [Webpack](https://webpack.js.org/concepts/hot-module-replacement/) for Hot Module Replacement;
- [Flummox](https://github.com/acdlite/flummox) for teaching me to approach Flux without boilerplate or singletons;
- [disto](https://github.com/threepointone/disto) for a proof of concept of hot reloadable Stores;
- [NuclearJS](https://github.com/optimizely/nuclear-js) for proving this architecture can be performant;
- [Om](https://github.com/omcljs/om) for popularizing the idea of a single state atom;
- [Cycle](https://github.com/cyclejs/cycle-core) for showing how often a function is the best tool;
- [React](https://github.com/facebook/react) for the pragmatic innovation.

Special thanks to [Jamie Paton](http://jdpaton.github.io) for handing over the `redux` NPM package name.

## Logo

You can find the official logo [on GitHub](https://github.com/reduxjs/redux/tree/master/logo).

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  
Every release, along with the migration instructions, is documented on the GitHub [Releases](https://github.com/reduxjs/redux/releases) page.

## Patrons

The work on Redux was [funded by the community](https://www.patreon.com/reactdx).  
Meet some of the outstanding companies that made it possible:

- [Webflow](https://github.com/webflow)
- [Ximedes](https://www.ximedes.com/)

[See the full list of Redux patrons](PATRONS.md), as well as the always-growing list of [people and companies that use Redux](https://github.com/reduxjs/redux/issues/310).


# 2. NativeBase [![](http://slack.nativebase.io/badge.svg)](http://slack.nativebase.io/) [![Build Status](https://travis-ci.org/GeekyAnts/NativeBase.svg?branch=master)](https://travis-ci.org/GeekyAnts/NativeBase) [![npm version](https://badge.fury.io/js/native-base.svg)](https://badge.fury.io/js/native-base) [![npm downloads](https://img.shields.io/npm/dt/native-base.svg)](https://npm-stat.com/charts.html?package=native-base&from=2016-04-01&to=2018-02-17)

[![NPM](https://nodei.co/npm/native-base.png?downloads=true)](https://nodei.co/npm/native-base/)

Essential cross-platform UI components for React Native

 Updated docs [here!](https://docs.nativebase.io/)

![Demo](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/iOS.gif)
![Demo](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/Android.gif)


# Table of Content

1. [What is NativeBase?](#1-what-is-nativebase)
2. [Why NativeBase?](#2-why-nativebase)
3. [KitchenSink App](https://github.com/GeekyAnts/NativeBase-KitchenSink)
4. [Getting Started](#4-getting-started)
5. [Components](#5-components)
6. [NativeBase for Web](#6-nativebase-for-web)
7. [Compatibility Versions](#7-compatibility-versions)
8. [React Native Seed](#8-react-native-seed)
9. [NativeBase Market](#9-nativebase-market)
10. [Documentation](#10-documentation)
11. [Website](#11-website)
12. [Quick Links to NativeBase](#12-quick-links-to-nativebase)
13. [About the creators](#13-about-the-creators)



## 1. What is NativeBase?
[NativeBase](https://nativebase.io/) is a sleek, ingenious and dynamic front-end framework created by passionate React Loving team at [Geekyants.com](https://geekyants.com/) to build cross platform Android & iOS mobile apps using ready to use generic components of React Native.



## 2. Why NativeBase?
What is really great with [NativeBase](https://nativebase.io/) is that you can use shared UI cross-platform components, which will drastically increase your productivity. When using NativeBase, you can use any native third-party libraries out of the box.<br />

**Recommended by** *Microsoft*
> If you're looking to get started with React Native + CodePush, and are looking for an awesome starter kit, you should check out Native Starter Pro - [Microsoft's react-native-code-push repo](https://github.com/Microsoft/react-native-code-push#example-apps--starters)

**Recommended by [Awesome React Native](https://github.com/jondot/awesome-react-native)**
>NativeBase added into the list of [Frameworks](https://github.com/jondot/awesome-react-native#frameworks) of Awesome React Native and are also used by many other React lovers across the world.


## 4. Getting Started

**a. Setup with pure React Native app**

*Install NativeBase*

```js
npm install native-base --save
```
*Install Peer Dependencies*<br />
The peer dependencies included from any npm packages does not automatically get installed. Your application will not depend on it explicitly.

```js
react-native link
```

You've successfully setup [NativeBase](https://nativebase.io/) with your [React Native](https://facebook.github.io/react-native/) app. Your React Native app is now all set to run on iOS and Android simulator.


**b. Setup with CRNA**

*Create React Native project using the CRNA cli.* <br />
CRNA helps you make React Native apps with no build configuration. Create React App works on macOS, Windows, and Linux. <br />
Refer this link for additional information [CRNA](https://github.com/react-community/create-react-native-app)

*Install NativeBase*
```js
npm install native-base --save
```
*Install @expo/vector-icons*
```js
npm install @expo/vector-icons --save
```
<br />

**Note** <br />
[NativeBase](https://nativebase.io/) uses some custom fonts that can be loaded using **loadAsync** function. Check out [this](https://docs.expo.io/versions/v15.0.0/sdk/font.html#expofontloadasyncname-url) expo link.
<br />
Syntax <br />
```js
async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
      });
```
<br />

Check out the [KitchenSink](https://expo.io/@geekyants/nativebasekitchensink) with CRNA for an example of the implementation.<br />
Find the [KitchenSink repo here](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/CRNA)

**c. Setup with ignite-native-base-boilerplate**

You can run the following command to create the boilerplate, provided you have [Ignite CLI](https://github.com/infinitered/ignite) installed.

```
ignite new appname --boilerplate native-base-boilerplate
```
Go to app location
```sh
cd appname
```
For iOS run
```sh
react-native run-ios
```
For Android run
```sh
react-native run-android
```
Refer [ignite-native-base-boilerplate](https://github.com/GeekyAnts/ignite-native-base-boilerplate) page for additional information

## 5. Components

[NativeBase](https://nativebase.io/) is made from effective building blocks referred to as components. The Components are constructed in pure [React Native](https://github.com/facebook/react-native) platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.

## 6. NativeBase for Web

NativeBase is now available for React web lovers. Check the [demo](https://nativebase.io/kitchen-sink-web-app/)
Find the repo [here](https://github.com/GeekyAnts/NativeBase-KitchenSink/tree/web-support)


## 7. Compatibility Versions

| NativeBase   |      React Native      |
|----------|-------------|
| v0.1.1	| v0.22 to v0.23 |
| v0.2.0 to v0.3.1 | v0.24 to v0.25 |
| v0.4.6 to v0.4.9 | v0.26.0 - v0.27.1 |
| v0.5.0 to v0.5.15 | v0.26.0 - v0.37.0 |
| v0.5.16 to v0.5.20 | v0.38.0 - v0.39.0 |
| v2.0.0-alpha1 to v2.1.3 | v0.38.0 to v0.43.0 |
| v2.1.4 to v2.1.5 | v0.44.0 to v0.45.0 |
| v2.2.0 | v0.44.0 to v0.45.0 |
| v2.2.1 | v0.46.0 and above |
| v2.3.0 to 2.6.1 | v0.46.0 and above *(does not support React 16.0.0-alpha.13)*|
| v2.7.0 | v0.56.0 and above |

## 8. [React Native Seed](https://reactnativeseed.com/)


React Native Seed provides you React Native starter kits for your base app with the technologies that you love.

Based on the feedback we received from our users, people had trouble sorting out the right boilerplate for them with the desired technologies and contacted us to enquire. We realized that many people were particular about the technologies they want in the app and that a minimal, neat solution was required to solve this, and hence, React Native Seed.

React Native Seed is for learners and professionals alike, those who want to experiment, learn all aspects and those who already know enough, just want a starter kit to quickly start working on their project.


## 9. NativeBase Market

Having tried with the free version, [Native Starter Kit](https://github.com/start-react/native-starter-kit) and appreciate our product?

Get on the mobile fast track with the featured apps of [NativeBase](https://nativebase.io/), to build high-quality iOS and Android mobile apps.<br />
A [marketplace](https://market.nativebase.io/) for premium React Native app themes to build high-quality iOS and Android mobile apps. <br />

## 10. Documentation

Go through [NativeBase Docs](https://docs.nativebase.io/) to play with [NativeBase](https://nativebase.io/).



## 11. Website
[https://nativebase.io/](https://nativebase.io/)



## 12. Quick Links to NativeBase

*	[NativeBase Documentation](https://docs.nativebase.io/)
*	[NativeBase Blog](https://blog.nativebase.io)
*	[NativeBase on Twitter](https://twitter.com/NativeBaseIO)
*	[NativeBase on FaceBook](https://www.facebook.com/nativebaseio/)


## 13. About the creators

We are [GeekyAnts](https://geekyants.com/), a startup based in Bangalore, India with 50+ developers in strength. We have been very active in the React / React Native community where we have developed [StrapUI](https://www.strapui.com/) and [StartReact](https://startreact.com/). Our other products include [StartLaravel](http://startlaravel.com) and [StartAngular](http://startangular.com).

Another major project by us is [BuilderX](https://builderx.io/?utm_source=github&utm_medium=nativebase&utm_campaign=nativebase), a screen design tool which codes React Native for you.

# 3. Expo Client [![CircleCI](https://circleci.com/gh/expo/expo.svg?style=svg)](https://circleci.com/gh/expo/expo) [![Forums](https://img.shields.io/badge/expo-forum-blue.svg)](https://forums.expo.io)

The Expo client app for Android and iOS.

[Click here to view our documentation](https://docs.expo.io) for developing on Expo.

## Introduction

This is the source code for the Expo client app used to view experiences published to the Expo service. If you want to build and install the Expo client directly onto a device, you're in the right place. Note that if you just want to install the Expo client app on a simulator, you do not need to build it from source. Instead, you should [follow the instructions here](https://docs.expo.io/versions/latest/introduction/installation.html).

To build the Expo client app, follow the instructions in the [Set Up](#set-up) section below. Use the [expo-cli](https://docs.expo.io/versions/latest/workflow/expo-cli) command line to use Expo's infrastructure to build your app.

Please ask us on the [forums](https://forums.expo.io/) if you get stuck.

**Disclaimers:**

If you want to build a standalone app that has a custom icon and name, see [our documentation here](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html). You're in the wrong place, you shouldn't need to build the Expo clients from source.

If you need to make native code changes to your Expo project, such as adding custom native modules, we can [generate a native project for you](https://docs.expo.io/versions/latest/expokit/eject). You're in the wrong place, you shouldn't need to build the Expo clients from source.

## Set Up

Please use Node 8+ and npm 4. We recommend installing Node using [nvm](https://github.com/creationix/nvm). We support building the clients only on macOS.

- Install the [`git-lfs`](https://git-lfs.github.com/) command line extension for `git`.
- Install [the Gulp CLI](http://gulpjs.com/) globally: `npm install gulp-cli -g`.
- Clone this repo; we recommend cloning it to a directory whose full path does not include any spaces.
- Run `yarn` in the `tools-public` directory.

#### iOS
- Make sure you have latest non-beta Xcode installed.
- Install [Cocoapods](https://cocoapods.org/): `gem install cocoapods --no-ri --no-rdoc`
- Run `git lfs pull`.
- Run `./generate-files-ios.sh` in the `tools-public` directory.
- Open and run `ios/Exponent.xcworkspace` in Xcode.

#### Android
- Make sure you have Android Studio 3 and the [Android NDK](https://facebook.github.io/react-native/docs/building-from-source.html#download-links-for-android-ndk) version `r10e` installed.
- Run `./generate-dynamic-macros-android.sh` in the `tools-public` directory.
- Build and install Android with `cd android; ./run.sh; cd ..`. It might fail the first time. If so just run `./run.sh` again.

If you are running on an phone with Android 5 you might have to use `./run.sh installDev19Debug`. There is a bug running multidex applications in debug mode on Android 5 devices: https://code.google.com/p/android/issues/detail?id=79826.

## Running on a Device

### iOS
- In Xcode's menu bar, open the **Xcode** drop-down menu, and select **Preferences**.  Then in the **Accounts** tab of the preferences menu, add add your personal or team apple developer account.
- Connect your test device to your computer with a USB cable.
- In Xcode's menu bar, open the **Product** drop-down menu, select **Destination**, then in the _Device_ grouping select your device.
- In the project navigator, select the **Exponent** project to bring up the project's settings, and then:
  - In the **General** tab, in the **Identity** section, put in a unique Bundle Identifier.
  - Also in the **General** tab, in the **Signing** section, select your personal or team apple developer account as your **Team**, and create a new signing certificate by clicking **Fix Issue**.
- Finally, run the build

### Android
- If the Play Store version of the Expo Client App is installed on your test device, uninstall it.
- Connect your test device to your computer with a USB cable.
- Run `cd android; ./run.sh`, or alternately open the `android` directory in Android Studio, start it, and in the **Select Deployment Target** dialog, select your device.

## Standalone Apps

If you don't need custom native code outside of the Expo SDK, head over to [our documentation on building standalone apps without needing Android Studio and Xcode](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html).

If you're still here, make sure to follow the [Configure app.json](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html#2-configure-appjson) section of the docs before continuing. You'll need to add the appropriate fields to your `app.json` before the standalone app scripts can run. Once that's done, continue on to the platform-specific instructions.

#### Android
The Android standalone app script creates a new directory `android-shell-app` with the modified Android project in it. It then compiles that new directory giving you a signed or unsigned `.apk` depending on whether you provide a keystore and the necessary passwords. If there are issues with the app you can open the `android-shell-app` project in Android Studio to debug.

Here are the steps to build a standalone Android app:
- Publish your experience from `XDE` or `exp`. Note the published url.
- `cd tools-public`.
- If you want a signed `.apk`, run `gulp android-shell-app --url [the published experience url] --sdkVersion [sdk version of your experience] --keystore [path to keystore] --alias [keystore alias] --keystorePassword [keystore password] --keyPassword [key password] --workingDir=../`.
- If you don't want a signed `.apk`, run `gulp android-shell-app --url [the published experience url] --sdkVersion [sdk version of your experience] --workingDir=../`.
- The `.apk` file will be at `/tmp/shell-signed.apk` for a signed `.apk` or at `/tmp/shell-debug.apk` for an unsigned `.apk`.
- `adb install` the `.apk` file to test it.
- Upload to the Play Store!

#### iOS
The iOS standalone app script has two actions, `build` and `configure`. `build` creates an archive or a simulator build of the Expo iOS workspace. `configure` accepts a path to an existing archive and modifies all its configuration files so that it will run as a standalone Expo experience rather than as the Expo client app.

Here are the steps to build a standalone iOS app:
- Publish your experience from `XDE` or `exp`. Note the published url.
- `cd tools-public`.
- `gulp ios-shell-app --action build --type [simulator or archive] --configuration [Debug or Release]`
- The resulting archive will be created at `../shellAppBase-[type]`.
- `gulp ios-shell-app --url [the published experience url] --action configure --type [simulator or archive] --archivePath [path to ExpoKitApp.app] --sdkVersion [sdk version of your experience] --output your-app.tar.gz`
- This bundle is not signed and cannot be submitted to iTunes Connect as-is; you'll need to manually sign it if you'd like to submit it to Apple. [Fastlane](https://fastlane.tools/) is a good option for this. Also, [Expo will do this for you](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you don't need to build this project from source.
- If you created a simulator build in the first step, unpack the tar.gz using `tar -xvzf your-app.tar.gz`. Then you can run this on iPhone Simulator using `xcrun simctl install booted <app path>` and `xcrun simctl launch booted <app identifier>`. Another alternative which some people prefer is to install the [ios-sim](https://github.com/phonegap/ios-sim) tool and then use `ios-sim launch <app path>`.
- There are a few more optional flags you can pass to this script. They are all documented in the block comments inside `xdl/src/detach/IosShellApp.js`.

## Modifying JS Code
The Expo client apps run a root Expo project in addition to native code. By default this will use a published version of the project, so any changes made in the `home` directory will not show up without some extra work.

Serve this project locally by running `expo start` from the `home` directory. On iOS, you'll additionally need to set `DEV_KERNEL_SOURCE` to `LOCAL` in `EXBuildConstants.plist` (the default is `PUBLISHED`).

The native Android Studio and XCode projects have a build hook which will find this if `expo start` is running. Keep this running and rebuild the app on each platform.

## Project Layout

- `android` contains the Android project.
- `home` contains the JavaScript source code of the app.
- `ios` contains the iOS project.
- `ios/Exponent.xcworkspace` is the Xcode workspace. Always open this instead of `Exponent.xcodeproj` because the workspace also loads the CocoaPods dependencies.
- `tools-public` contains build and configuration tools.
- `template-files` contains templates for files that require private keys. They are populated using the keys in `template-files/keys.json`.
- `template-files/ios/dependencies.json` specifies the CocoaPods dependencies of the app.

## Tests

### iOS

For native XCTest unit tests:

- Press Command+U in XCode to build and test the `Tests` unit test target.
- Alternatively, run `fastlane ios test` from the parent directory of `ios`.

For JS integration tests, test the `ExponentIntegrationTests` target (not included in the default test scheme). This target requires you to configure `EXTestEnvironment.plist` with a key `testSuiteUrl` whose value is the URL to load some version of Expo's [test-suite](apps/test-suite) app. This will run a bunch of Jasmine tests against the Expo SDK.

## Contributing
Please check with us before putting work into a Pull Request! It is often harder to maintain code than it is to write it. The best place to talk to us is on Slack at https://slack.expo.io.

# 4. [React Native](https://facebook.github.io/react-native/) &middot;  [![Circle CI Status](https://circleci.com/gh/facebook/react-native.svg?style=shield)](https://circleci.com/gh/facebook/react-native) [![Build status](https://ci.appveyor.com/api/projects/status/g8d58ipi3auqdtrk/branch/master?svg=true)](https://ci.appveyor.com/project/facebook/react-native/branch/master) [![npm version](https://badge.fury.io/js/react-native.svg)](https://badge.fury.io/js/react-native) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

Learn once, write anywhere: Build mobile apps with React.

See the official [React Native website](https://facebook.github.io/react-native/) for an introduction to React Native.

- [Requirements](#requirements)
- [Getting Started](#building-your-first-react-native-app)
- [Documentation](#full-documentation)
- [Upgrading](https://facebook.github.io/react-native/docs/upgrading)
- [Contributing](#join-the-react-native-community)
- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [License](#license)

---

## Requirements

Supported target operating systems are >= Android 4.1 (API 16) and >= iOS 9.0. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS by default (tools like [Expo](https://expo.io) can be used to get around this).

## Building your first React Native app

Follow the [Getting Started guide](https://facebook.github.io/react-native/docs/getting-started.html). The recommended way to install React Native depends on your project. Here you can find short guides for the most common scenarios:

- [Trying out React Native](https://snack.expo.io/BJ-uC-nrb)
- [Creating a New Application](https://facebook.github.io/react-native/docs/getting-started.html)
- [Adding React Native to an Existing Application](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html)


## How React Native works

React Native lets you build mobile apps using JavaScript. It uses the same design as [React](https://facebook.github.io/react), letting you compose a rich mobile UI from declarative components.

With React Native, you don't build a "mobile web app", an "HTML5 app", or a "hybrid app". You build a real mobile app that's indistinguishable from an app built using Objective-C, Java, Kotlin, or Swift. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.

React Native lets you build your app faster. Instead of recompiling, you can reload your app instantly. With hot reloading, you can even run new code while retaining your application state.

React Native combines smoothly with components written in Objective-C, Java, Kotlin, or Swift. It's simple to drop down to native code if you need to optimize a few aspects of your application. It's also easy to build part of your app in React Native, and part of your app using native code directly - that's how the Facebook app works.

The focus of React Native is on developer efficiency across all the platforms you care about - learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.

## Full documentation

The full documentation for React Native can be found on our [website](https://facebook.github.io/react-native/docs/getting-started.html). The source for the React Native documentation and website is hosted on a separate repo, <https://github.com/facebook/react-native-website>.

The React Native documentation only discusses the components, APIs, and topics specific to React Native (React on iOS and Android). For further documentation on the React API that is shared between React Native and React DOM, refer to the [React documentation](https://facebook.github.io/react/).

## Join the React Native community
* Website: https://facebook.github.io/react-native
* Twitter: https://twitter.com/reactnative
* Discussion: https://discuss.reactjs.org/

See the [CONTRIBUTING](./CONTRIBUTING.md) file for how to help out.

## 5. React Native Firebase

is a _light-weight_ javascript layer connecting you to the native Firebase SDKs for both iOS and Android which aimes to mirror the offical Firebase Web SDK as closely as possible.

Although the official [Firebase JS SDK](https://www.npmjs.com/package/firebase) will work with React Native; it is mainly built for the web and has a limited feature-set compared to native.

Using the native Firebase SDKs with **React Native Firebase** allows you to consume device SDKs which don't exist on the Firebase JS SDK - for example; Remote Config, Performance Monitoring, Dynamic Links, Analytics and more (see the feature table below for comparison).

---

## Supported Firebase Features

> The Web SDK column indicates what modules/functionality from the Web SDK are usable within React Native.

> '**?**' indicates partial support

| Firebase Features                                                                                                                 | v5.x.x | Web SDK |
| --------------------------------------------------------------------------------------------------------------------------------- | :----: | :-----: |
| **AdMob**                                                                                                                         |   ✅   |   ❌    |
| **Analytics**                                                                                                                     |   ✅   |   ❌    |
| **App Indexing**                                                                                                                  |   ❌   |   ❌    |
| **Authentication**                                                                                                                |   ✅   |   ✅    |
| _-- Phone Auth_                                                                                                                   |   ✅   |   ✅    |
| **Core**                                                                                                                          |   ✅   |   ✅    |
| _-- Multiple Apps_                                                                                                                |   ✅   |   ✅    |
| **Cloud Firestore**                                                                                                               |   ✅   |   ✅    |
| **Cloud Messaging (FCM)**                                                                                                         |   ✅   |   ❌    |
| **Crashlytics**                                                                                                                   |   ✅   |   ❌    |
| **Dynamic Links**                                                                                                                 |   ✅   |   ❌    |
| **[Functions Callable](https://firebase.googleblog.com/2018/04/launching-cloud-functions-for-firebase-1-0.html?m=1)**             |   ✅   |   ✅    |
| **Invites**                                                                                                                       |   ✅   |   ❌    |
| **Instance ID**                                                                                                                   |   ✅   |   ❌    |
| **Performance Monitoring**                                                                                                        |   ✅   |   ❌    |
| **Realtime Database**                                                                                                             |   ✅   |   ✅    |
| _-- Offline Persistence_                                                                                                          |   ✅   |  **?**  |
| **Remote Config**                                                                                                                 |   ✅   |   ❌    |
| **Storage**                                                                                                                       |   ✅   |   ✅    |

---

### Supported versions - React Native / Firebase

> The table below shows the supported versions of React Native and the Firebase SDKs for different versions of `react-native-firebase`.

|                           |  3.3.x   |  4.3.x  |     5.0.x     |
| ------------------------- | :------: | :-----: | :-----------: |
| React Native              | 0.50-52  | 0.52-55 |     0.57      |
| Play Services Android SDK | 11.8.0 + | 15.0.1  |    15.0.1+    |
| Firebase iOS SDK          | 4.7.0 +  |  5.3.0  | 5.8.1 - 5.9.0 |

---

## Documentation

To check out our latest docs, visit [https://invertase.io/oss/react-native-firebase](https://invertase.io/oss/react-native-firebase)

## Questions

For questions and support please use our [Discord chat](https://discord.gg/C9aK28N) or [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native-firebase). The issue list of this repo is **exclusively** for bug reports.

## Issues

Please make sure to complete the issue template before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Feature Requests

For feature requests please visit our [Feature Request Board](https://boards.invertase.io/react-native-firebase).

## Changelog

Detailed changes for each release are documented in the [releases notes](https://github.com/invertase/react-native-firebase/releases).

---

## Supporting RNFirebase

RNFirebase is an Apache-2.0 licensed open source project. It's an independent project with its ongoing development made possible entirely thanks to the support by these awesome [sponsors](#sponsors) and [backers](#backers). If you'd like to join them, please consider:

- [Become a backer or sponsor on Open Collective](https://opencollective.com/react-native-firebase).

### Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/react-native-firebase#sponsor)]

<a href="https://opencollective.com/react-native-firebase/sponsor/0/website" target="_blank"><img src="https://opencollective.com/react-native-firebase/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/react-native-firebase/sponsor/1/website" target="_blank"><img src="https://opencollective.com/react-native-firebase/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/react-native-firebase/sponsor/2/website" target="_blank"><img src="https://opencollective.com/react-native-firebase/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/react-native-firebase/sponsor/3/website" target="_blank"><img src="https://opencollective.com/react-native-firebase/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/react-native-firebase/sponsor/4/website" target="_blank"><img src="https://opencollective.com/react-native-firebase/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/react-native-firebase/sponsor/5/website" target="_blank"><img src="https://opencollective.com/react-native-firebase/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/react-native-firebase/sponsor/6/website" target="_blank"><img src="https://opencollective.com/react-native-firebase/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/react-native-firebase/sponsor/7/website" target="_blank"><img src="https://opencollective.com/react-native-firebase/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/react-native-firebase/sponsor/8/website" target="_blank"><img src="https://opencollective.com/react-native-firebase/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/react-native-firebase/sponsor/9/website" target="_blank"><img src="https://opencollective.com/react-native-firebase/sponsor/9/avatar.svg"></a>

### Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/react-native-firebase#backer)]

<a href="https://opencollective.com/react-native-firebase#backers" target="_blank"><img src="https://opencollective.com/react-native-firebase/backers.svg?width=890"></a>

### Contributing

Please make sure to read the [Contributing Guide](CONTRIBUTING.md) before making a pull request.

Thank you to all the people who have already contributed to RNFirebase!

<a href="graphs/contributors"><img src="https://opencollective.com/react-native-firebase/contributors.svg?width=890" /></a>

<hr>

# Setup:

- Create a `constants/ApiKeys.js` file and put your actual firebase config values:
```
export default {
  FirebaseConfig: {
    apiKey:      "",
    authDomain:  "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }
}
```
- Run `yarn`
