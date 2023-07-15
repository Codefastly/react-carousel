<p align="center">
  <a href="https://codefastly.net">
    <img src="https://avatars.githubusercontent.com/u/82246952?s=400&u=15f03d76bdc4e715951d14858ab23b60e14531b0&v=4" width="92" height="92px" alt="Codefastly logo"/>
  </a>
</p>

<h1 align="center">
  🎠 Codefastly Carousel
</h1>

<p align="center">
    <a href="https://github.com/codefastly/react-carousel/actions/workflows/publish.yml"><img src="https://github.com/codefastly/react-carousel/actions/workflows/publish.yml/badge.svg" alt="Build status"/></a>
    <a href="https://www.npmjs.com/package/@codefastly/react-carousel"><img src="https://img.shields.io/npm/v/@codefastly/react-carousel" alt="NPM version"/></a>
    <a href="https://github.com/codefastly"><img src="https://img.shields.io/badge/Codefastly-OS-green.svg?style=flat-square" alt="Codefastly Open Source"/></a>
    <a href="https://codefastly.net"><img src="https://img.shields.io/badge/Codefastly-NET-black.svg?style=flat-square" alt="Codefastly Web"/></a>
</p>

<p align="center">
  A React Carousel supporting different slides sizes, responsive, custom styling, accesible by default, SSR compatible, and tested.
  <br />
  <br />
  <a href="https://github.com/codefastly/react-carousel/stargazers">Stars are welcome 😊</a>
</p>

## ✨ Features

- Automagically responsive:
  - Any size: no need to set a specific size via props
  - Multiple items: no need to set the number of items per "page"
- Supports images, videos, everything: each direct child is a slide
- Scroll based: works on mobile or trackpad
- Control buttons
- Custom styling
- Accessible by default
- Show next/previous items partially
- Works with server-side rendering

## ⚙️ How to use

1. Install the dependency
   ```sh
   npm install @codefastly/react-carousel
   ```
   or
   ```sh
   yarn @codefastly/react-carousel
   ```
2. Import and use:
   ```javascript
   import { Carousel } from "@codefastly/react-carousel"
   ```
   ```jsx
   <Carousel>
     <div>A simple slide</div>
     <div><img src="https://placekitten.com/500/500" alt="a slide can contain anything" /></div>
     <article>
       <h2>It can be any tag</h2>
       <p>and contain any number of items</p>
     </article>
   </Carousel>
   ```
   The carousel automatically detects the size of each slide and when navigating via buttons, it will scroll smoothly until the first not visible slide is in view.

### 🎛️ Props

| Name                | Value               | Default                     | Description                 |
| ------------------- | ------------------- | --------------------------- | --------------------------- |
| `prevButtonContent` | `React.ReactNode`   | [`<ArrowLeft />`](https://github.com/codefastly/react-carousel/tree/main/src/components/ArrowLeft.tsx)   | The HTML content of the previous navigation button |
| `nextButtonContent` | `React.ReactNode`   | [`<ArrowRight />`](https://github.com/codefastly/react-carousel/tree/main/src/components/ArrowRight.tsx) | The HTML content of the next navigation button     |
| `prevAriaLabel`     | `string`            | "Previous"                  | Defines the previous navigation button `aria-label` attribute. Useful when the button content is an element without accessible text. |
| `nextAriaLabel`     | `string`            | "Next"                      | Defines the previous navigation button `aria-label` attribute. Useful when the button content is an element without accessible text. |

### 🎨 Styling
There are some CSS Variables that will help you style the carousel:

| Name                      | Default             | Description                                   |
| ------------------------- | ------------------- | --------------------------------------------- |
| `--slider-gap`            | `0`                 | Sets the gap between slides                   |
| `--slider-nav-margin-top` | `0.5rem`            | Sets the top margin of the navigation buttons |
| `--slider-button-width`   | `2.5rem`            | Sets the navigation buttons width             |
| `--slider-button-height`  | `2.5rem`            | Sets the navigation buttons height            |
| `--slider-button-padding` | `0.2rem`            | Sets the padding of the navigation buttons    |

If this is not enough, you can always style via CSS classes. They all have low specificity so they are easy to overwrite, but be careful, changing this elements could cause the carousel to break. Try to limit the changes to colors, background, etc. to prevent unexpected results.

| Class               | Description                            |
| ------------------- | -------------------------------------- |
| `.carousel`         | The main carousel wrapper              |
| `.carousel__slider` | The carousel scroller                  |
| `.carousel__slide`  | The wrapper for each slide             |
| `.carousel__nav`    | The wrapper for the navigation buttons |
| `.carousel__button` | The navigation buttons                 |


## 🤝 Contributing

### 📚 Run

- `npm run build`: Compiles the Carousel package
- `npm run storybook`: Opens Storybook documentation with all of the Carousel demos

### ✅ Testing

`npm run test`: Run unit tests with Jest and React Testing Library

### 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## 👌 Codefastly Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration
