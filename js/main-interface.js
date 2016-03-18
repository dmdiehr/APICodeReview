var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/getRepos.js').getRepos;

// console.log(apiKey);
// console.log(getRepos);

$(document).ready(function(){
  $('#button').click(function(event){
    event.prevenDefault;
    var userName = $('#user-input').val();
    getRepos(userName, apiKey).done(function(response){
      console.log(userName)
      $('#username').text(userName);
      $('.repo').remove();
      for(var i=0; i<response.length; i++){
        var repoName = response[i].name;
        var description = response[i].description;
        var created = response[i].created_at.slice(0,10);
        var updated = response[i].updated_at.slice(0,10);
        var anchor = "https://developer.github.com/v3/repos/#list-user-repositories"

        $('#display').append(

          "<div class='repo'><h4>"+repoName+"</h4><p><strong>Description:</strong>"+description+"</p><p class='date'><strong>Created:</strong>"+created+"</p><p class='date'><strong>Updated:</strong>"+updated+"</p><a href='"+anchor+"'>See Repo</a></div>"
        );

      }
      $('#display').show();
    }).fail(function(){
      if(input.length>0){
        $('.name').text(userName);
      }
      $('#display').show();
    });
  });//buton.click
});//document.ready
