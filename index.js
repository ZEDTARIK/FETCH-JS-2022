// today i will learn fetch 
// how to get data from api using fetch 
// fetch return in Promess ( use then and catch )

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res =>  res.json())
.then(posts => console.log(posts))
.catch(err => console.log(err))
  