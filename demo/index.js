
const http = new simpleAJAX;

const data = {
  userId: 101,
  title: 'Custom post',
  body: 'This is a custom post'
};

// GET request
posts = http.get('https://jsonplaceholder.typicode.com/users',
(err, posts) => {
  if(err) {
    console.log(err)
  } else {
  document.getElementById('test').innerHTML = posts;
  }
});

// POST request
http.post('https://jsonplaceholder.typicode.com/posts',
data, (err, post) => {
  if(err) {
    console.log(err)
  } else {
    console.log(post);
  }
});

// PUT request
http.put('https://jsonplaceholder.typicode.com/posts/1',
data, (err, post) => {
  if(err) {
    console.log(err)
  } else {
    console.log(post);
  }
});

// DELETE request
posts = http.delete('https://jsonplaceholder.typicode.com/posts/1',
(err, response) => {
  if(err) {
    console.log(err)
  } else {
  console.log(response);
  }
});
