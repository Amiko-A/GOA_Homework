fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  })
  .catch(error => {
    console.error('Err', error);
  });
