import $ from 'jquery';
//
// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data){
//   console.log(data);
//   }
// });


var baseURL = 'https://randomuser.me/api/?results=12&nat=us';
var dataReq = $.getJSON(url);


var inner = $('.inner');
console.log(url);
