import $ from 'jquery';
import './header.css';

$(document).ready(function () {
  $('body').prepend('<header><img src="logo.png" alt="Logo"><h1>Holberton Dashboard</h1></header>');
  console.log('Init header');
});
