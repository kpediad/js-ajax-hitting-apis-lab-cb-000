// your code here
function showRepositories() {
  //this is set to the XMLHttpRequest object that fired the event
  console.log(this.responseText);
}

function getRepositories() {
  const req = new XMLHttpRequest();
  const username = document.getElementById('username').value;
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/' + username + '/repos');
  req.send();
}
