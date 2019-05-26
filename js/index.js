// your code here
function getCommits(el) {
  const name = el.dataset.repo;
  const username = el.dataset.username;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', 'https://api.github.com/repos/' + username + '/' + name + '/commits');
  req.send();
}

function getBranches(el) {
  const name = el.dataset.repo;
  const username = el.dataset.username;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayBranches);
  req.open('GET', 'https://api.github.com/repos/' + username + '/' + name + '/branches');
  req.send();
}

function showRepositories() {
  const repos = JSON.parse(this.responseText);
  //console.log(repos);
  const repoList = `<ul>${repos
    .map(r => '<li><a href="' + r.html_url + '">' + r.name + '</a>' + ' - <a href="#" data-username="' + r.owner.login + '" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a>' + ' - <a href="#" data-username="' + r.owner.login + 'data-repo="' + r.name + '" onclick="getBranches(this)">Get Branches</a></li>')
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
