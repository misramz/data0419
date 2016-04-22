import $ from 'jquery';
//console.log($);
//
// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data){
//   console.log(data);
//   }
// });

 //var url= 'https://randomuser.me/api/';
// var dataReq = $.getJSON(url).then(function(res){
//   console.log('res',res);
//});

var inner = $('.inner');
var baseURL = 'https://randomuser.me/api/?results=12&nat=us';
 var dataReq = $.getJSON(baseURL);
 dataReq.then(function(res){
   console.log(res.results);
   res.results.forEach(function(x){
     console.log(x.picture.thumbnail);
    var htmldata= user(x);
    inner.append(htmldata);
   })
 })
//

var user = function(x){
  return`
  <section class="user">
  <div class="picbox"> <img src = "${x.picture.large} "/></div>
  <div class="textbox" >

  <h3> <span> ${x.name.first} ${x.name.last}</span> </h3> <h4>${x.email}</h4> <h5>${x.location.street}</h5> <h5>${x.cell}</h5> <h5 class="ssn">${x.id.value}</h5></div>
  </section>
  `;

}
//
// var userImage = function (user {})
//
//
// var inner = $('.inner');
// console.log(url);
