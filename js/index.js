// your code here
function showRepositories() {
  const repos = JSON.parse(this.responseText);
  //console.log(repos);
  const repoList = `<ul>${repos
    .map(r => '<li><a href="' + r.html_url + '">' + r.name + '</a>' + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a>' + ' - <a href="#" data-repo="' + r.name + '" onclick="getBranches(this)">Get Branches</a></li>')
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getRepositories() {
  const req = new XMLHttpRequest();
  const username = document.getElementById('username').value;
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/' + username + '/repos');
  req.send();
}
