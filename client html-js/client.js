fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => console.log(json));