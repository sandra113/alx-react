import $ from 'jquery';
import _ from 'lodash';
import './body.css';


let counter = 0;

function updateCounter() {
  $('#counter').text(counter);
}

$(document).ready(function () {
  $('body').append('<button id="increment">Increment</button><p id="counter">0</p>');
  $('#increment').on('click', function () {
    counter = _.add(counter, 1);
    updateCounter();
  });
});
