document.getElementById('button').addEventListener('click', loaddUser);

function loaddUser() {
  //1 Create xhr object
  var xhr = new XMLHttpRequest();

  //2 open  (method, url/file, true/false)
  xhr.open('GET', 'user.json', true);

  //3 call a function
  xhr.onload = function() {
    if (this.status == 200) {
      
      var user=JSON.parse(this.responseText);

      var output='';
      output+=
      '<ul>'+
      '<li>ID: '+
      user.id+
      '</li>'+
      '<li>Name: '+
      user.name+
      '</li>'+
      '<li>Email: '+
      user.email+
      '</li>'+
      '</ul>';

      document.getElementById('text').innerHTML=output;
     

      
    } else if (this.status == 400) {
      console.log(this.responseText);
      document.getElementById('text').innerHTML='Not found 404';
    }
  };

  //4 use send() method
  xhr.send();
}
