exports.getRepos = function(username, apiKey){
  return $.get('https://api.github.com/users/'+username+'/repos?access_token='+apiKey);
};
