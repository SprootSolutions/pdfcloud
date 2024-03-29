import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import GoodTiming from '../assets/fonts/goodTiming-bd.otf';
const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'GoodTiming';
  src: url(${GoodTiming}) format('opentype');
}

@font-face {
  font-family: 'ProductSans-Bold';
  src: url('../public/fonts/ProductSans-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'ProductSans-Medium';
  src: url('../public/fonts/ProductSans-Medium.ttf') format('truetype');
}


body {
  font-family: -apple-system, BlinkMacSystemFont, 'goodTiming-bd.otf', 'ProductSans-Bold.ttf', 'ProductSans-Medium.ttf', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #121417;
  height: 100%;
  margin: 0;
}
code {
  font-family: source-code-pro, 'Courier New', monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}
a {
  text-decoration: none;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
button {
  cursor: pointer;
}

`;

export default GlobalStyle;
