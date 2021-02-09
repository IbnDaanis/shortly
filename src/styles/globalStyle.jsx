import { createGlobalStyle } from 'styled-components/'

const GlobalStyle = createGlobalStyle`
html.has-scroll-smooth {
  overflow: hidden; }

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.has-scroll-smooth body {
  overflow: hidden; 
}

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh; 
  
}

[data-scroll-direction="horizontal"] [data-scroll-container] {
  white-space: nowrap;
  height: 100vh;
  display: inline-block;
  white-space: nowrap; }

[data-scroll-direction="horizontal"] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%; }

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0; }
  .c-scrollbar:hover {
    transform: scaleX(1.45); }
  .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
    opacity: 1; }
  [data-scroll-direction="horizontal"] .c-scrollbar {
    width: 100%;
    height: 10px;
    top: auto;
    bottom: 0;
    transform: scaleY(1); }
    [data-scroll-direction="horizontal"] .c-scrollbar:hover {
      transform: scaleY(1.3); }

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab; }
  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing; }
  [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
    right: auto;
    bottom: 0; }

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins','Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: unset;
}

input {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  outline: 0;
  border-radius: 0;
  font-size: 16px;
}

button {
  outline: 0;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  
  &:hover{
    opacity: 0.7
  }
}

.hide {
  display: none;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`

export default GlobalStyle
