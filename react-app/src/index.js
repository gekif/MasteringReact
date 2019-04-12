import React from 'react';
import ReactDom from'react-dom';

const element = <h1>Hello World</h1>;
// console.log(element);

// Render component to HTML
ReactDom.render(element, document.getElementById('root'));