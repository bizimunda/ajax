document.getElementById('button').addEventListener('click', loadText);

function loadText() {
  //1 Create xhr object
  var xhr = new XMLHttpRequest();

  //2 open  (method, url/file, true/false)
  xhr.open('GET', 'simple.txt', true);

  //3 call a function
  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
      document.getElementById('text').innerHTML=this.responseText;
    } else if (this.status == 400) {
      console.log(this.responseText);
      document.getElementById('text').innerHTML='Not found 404';
    }
  };

  //4 use send() method
  xhr.send();
}
