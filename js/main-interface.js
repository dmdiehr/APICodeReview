var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/getRepos.js').getRepos;

// console.log(apiKey);
// console.log(getRepos);

$(document).ready(function(){
  $('#button').click(function(event){
    event.prevenDefault;
    var input = $('#user-input').val();
    getRepos(input, apiKey).done(function(response){
      $('#display').text(response);
      });
    })

  });
