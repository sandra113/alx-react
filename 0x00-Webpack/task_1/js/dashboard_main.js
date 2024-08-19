import $ from 'jquery';
import { debounce } from 'lodash';

$(document).ready(function() {
   $('body').append('<p>Holberton Dashboard</p>'); 
   $('body').append('<p>Dashboard data for the students</p>');
   $('body').append('<button>Click here to get started</button>');
   $('body').append('<p id="count"></p>');
   $('body').append('<p>Copyright - Holberton School</p>');

   let count = 0;

   function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
   }

   $('button').on('click', debounce(updateCounter, 500));
});