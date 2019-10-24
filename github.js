document.getElementById('button').addEventListener('click', loaddUser);

function loaddUser() {
  //1 Create xhr object
  var xhr = new XMLHttpRequest();

  //2 open  (method, url/file, true/false)
  xhr.open('GET', 'https://api.github.com/users', true);

  //3 call a function
  xhr.onload = function() {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      console.log(users);

      var output = '';

      for (var i in users) {
        output +=
          '<div class="user">' +
          '<img src="' +
          users[i].avatar_url +
          '" width="70"  height="70">' +
          '<ul>' +
          '<li>ID: ' +
          users[i].id +
          '</li>' +
          '<li>Login: ' +
          users[i].login +
          '</li>' +
          '</ul>' +
          '</div>';

        document.getElementById('users').innerHTML = output;
      }
    } else if (this.status == 400) {
      console.log(this.responseText);
      document.getElementById('text').innerHTML = 'Not found 404';
    }
  };

  //4 use send() method
  xhr.send();
}
