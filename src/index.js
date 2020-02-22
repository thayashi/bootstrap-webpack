/* eslint-disable no-undef */
import _ from 'lodash';
// import sampleImg from 'img/sample.png';
import 'bootstrap';


console.log($, Popper);

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
