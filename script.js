fetch('https://api.github.com/users/WiviWonderWoman/repos')
.then(resp => resp.json())
.then(data => console.log(data))
