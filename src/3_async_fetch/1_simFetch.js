async function getPost() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getPost();

////////
//better version for above sam elogic and result

async function getPost1() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
}

getPost1();
