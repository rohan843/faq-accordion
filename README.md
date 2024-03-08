# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - FAQ accordion solution](#frontend-mentor---faq-accordion-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/animated-faq-accordion-with-animated-dropdowns-Rn906Zc9dZ)
- Live Site URL: [FAQ accordion | Frontend Mentor](https://rohan843-faq-accordion.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties

### Useful resources

- [This SO answer to animate height of an element](https://stackoverflow.com/a/8331169/15060907) - The use of `max-height` property instead of `height` property in the animation was very insightful, as the user can essentially "ask" the browser to first use no height, and then as much height as required. The only issue in using `max-height` was that the duration of actually visible animation became difficult to ascertain. Currently, I worked around this by choosing a duration value that seems to be too small for being noticeable.

## Author

- Website - [Rohan Sharma](https://rohan843.netlify.app)
- Frontend Mentor - [@rohan843](https://www.frontendmentor.io/profile/rohan843)
