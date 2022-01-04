# Pomodoro Timer Challenge

This is a solution to the [Pomodoro app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G). This Pomodoro app provided some tricky challenges, including building a circular progress bar and a range of customizations, like colors and fonts.

## Table of contents

-   [Overview](#overview)
-   [The challenge](#the-challenge)
-   [Screenshot](#screenshot)
-   [Links](#links)
-   [My process](#my-process)
-   [Built with](#built-with)
-   [What I learned](#what-i-learned)
-   [Continued development](#continued-development)
-   [Useful resources](#useful-resources)
-   [How to run the project](#how-to-run-the-project)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   Set a Pomodoro timer and short & long break timers.
-   Customize how long each timer runs for.
-   See a circular progress bar that updates every minute and represents how far through their timer they are.
-   Customize the appearance of the app with the ability to set preferences for colors and fonts.

### Screenshot

![screenshoot](https://i.postimg.cc/NFWssg5Z/Pomodoro-Timer.png)

### Links

-   [Solution URL](https://github.com/josesaulguerrero/pomodoro-app)
-   [Live site URL ](https://my-pomodoro-app.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   [Yarn](https://yarnpkg.com/) - Node package manager
-   [create-react-app](https://create-react-app.dev/docs/) - To create a React setup ready to run.
-   [React](https://reactjs.org/) - JS library
-   [TypeScript](https://www.typescriptlang.org/docs/) - To type my components and avoid production bugs.
-   [Styled Components](https://styled-components.com/) - For styles
-   [Workbox](https://developers.google.com/web/tools/workbox/guides/get-started) - For managing the cache and service workers

### What I learned

Building this project helped me learn to use and improve my knowledge of some React and JS tools, such as:

-   Styled components and sharing styles.
-   Using TS features in a React project and typing my components.
-   Creating a custom hook that helped me manage my pomodoro timer.
-   Using the context api to save the timer configuration in one place.
-   UseEffect, it was really helpful when I needed to update my states and configuration.
-   Managing my service workers with Workbox.
-   Creating customizable SVGs.
-   Using Styled-components to change my css variables/custom properties every time the user changes the configuration.

### Continued development

-   TypeScript is a really nice super set of JS that introduces lots of cool features that helped me make my React code much safer, which leads to less room for bugs.

-   The react context api was a very helpful tool, handling my global state (the timer configuration) couldn't have been easier.

-   Updating the timer and the circular progress bar every time the user changes the configuration was a really hard task since I consumed this information in many components, but using the useEffect hook made this task much easier.

-   Webpack helped me start a development environment with DevServer and create bundles of code which are optimized for a production environment.

-   To manage my service workers, I used Workbox, a set of libraries that google provides to help you covert your apps into PWAs that can be installed like a native app and work even when offline.

-   I used styled components, an amazing CSS-in-JS library that lets you use all the JS features to easily write your style rules.

-   Implemented the `@media (hover: hover) {}` CSS media query, which is used to detect if the user's device has a cursor, to add hover transitions.

### Useful resources

-   [Basic use of TypeScript with React](https://www.youtube.com/watch?v=jrKcJxF0lAU) - I found this video very interesting because it teaches you how you can use TS in your react projects to avoid getting bugs by simply typing your components, props, state, etc.

-   [Basic knowledge on SVGs](https://www.youtube.com/watch?v=ZJSCl6XEdP8) - This playlist by Kevin Powell was really handy when I was trying to figure out how I could create customizable SVGs.

-   [How to create a circular progress bar using CSS and SVGs](https://www.youtube.com/watch?v=mSfsGTIQlxg&t=531s&ab_channel=EasyTutorials) - This video was REALLY helpful to find out How I could create a circular progress bar.

-   [Using the `css` feature that comes with styled-components to create mixins and share styles](https://styled-components.com/docs/api#css) - In one specific component I really needed to share some CSS rules and it was relieving to find out you can actually create mixins with styled-components!

-   [How to integrate Workbox in your React App](https://www.youtube.com/watch?v=uKNLaleXztc&list=PLD8nQCAhR3tTXYOhau-RTfZQ4uGvco7XQ&ab_channel=ImranSayed-CodeytekAcademy) - These videos were really helpful as they helped me integrate all the workbox libraries into my existing application.

## How to run the project

1. You need to have NodeJS, NPM and Yarn installed in your computer. Follow these instructions to install Node and NPM: (Windows and Mac) [NodeJS](https://nodejs.org/en/download/) or (Linux) [NVM](https://github.com/nvm-sh/nvm). After you're done with the previous step, go to your terminal and install Yarn: `npm install -g yarn`

2. Then you would need to install the necessary dependencies for this project, you can do it by running: `yarn install`

3. Finally open the project folder on your terminal and run: `yarn start` and you're ready to go, it will open the development environment.

## Author

-   Website - [Jose Saúl Guerrero Serrano](https://joseguerreroserrano.netlify.app/)
-   Github - [@josesaulguerrero](https://github.com/josesaulguerrero)
