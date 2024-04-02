import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="start">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    let count = 0;
    const updateCounter = _.debounce(function() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }, 300);

    $('#start').on('click', updateCounter);
});
