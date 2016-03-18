var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/getRepos.js').getRepos;

$(document).ready(function(){
  $('#button').click(function(event){
    event.prevenDefault;
    var userName = $('#user-input').val();
    getRepos(userName, apiKey).done(function(response){
      $('.name').text(userName);
      $('.blank').hide();
      $('#example').hide();
      $('.added').remove();
      $('#empty').hide();
      console.log(response.length);
      if(response.length===0){
        $('#empty').show();
      }
      for(var i=0; i<response.length; i++){
        var repoName = response[i].name;
        var description = response[i].description;
        if (description.length===0){description="None";}
        var created = response[i].created_at.slice(0,10);
        var updated = response[i].updated_at.slice(0,10);
        var anchor =response[i].html_url;

        $('#display').append(

          "<div class='repo added'><h4>"+repoName+"</h4><p><strong>Description: </strong>"+description+"</p><p class='date'><strong>Created: </strong>"+created+"</p><p class='date'><strong>Updated: </strong>"+updated+"</p><a href='"+anchor+"' target='_blank'>See Repo</a></div>"
        );
      }
      $('#display').show();
    }).fail(function(){
      if(userName.length>0){
        $('.name').text(userName);
      }
      $('.added').remove();
      $('.blank').show();
      $('#example').show();
      $('#display').show();
    });
  });//buton.click
});//document.ready
