// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import '../css/index.scss';
import 'highlight.js/styles/base16/hardcore.min.css';
// import 'highlight.js/styles/base16/humanoid-dark.min.css';
import '../css/luno/index.scss';
// Import JS
import menuOpen from './menuOpen';
import infiniteScroll from './infiniteScroll';
import hljs from 'highlight.js';
import LineNumberPlugin from '@taufik-nurrohman/highlight.ln.js';

// Call the menu and infinite scroll functions
menuOpen();
infiniteScroll();

hljs.addPlugin(LineNumberPlugin);
hljs.highlightAll();
// hljs.initLineNumbersOnLoad({
//   singleLine: true,
// });
