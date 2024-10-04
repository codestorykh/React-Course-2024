const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Create
async function createPost(post) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  console.log("Created Post:", data);
}

// Read
async function getPosts() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log("Posts:", data);
}

// Update
async function updatePost(id, updatedPost) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });
  const data = await response.json();
  console.log("Updated Post:", data);
}

// Delete
async function deletePost(id) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    console.log(`Deleted Post with ID: ${id}`);
  } else {
    console.error("Failed to delete post");
  }
}

// New todo
const newPost = {
  id: 1,
  title: "foo",
  body: "bar",
  userId: 1,
};

createPost(newPost);
getPosts();
updatePost(1, {
  id: 1,
  title: "updated title",
  body: "updated body",
  userId: 1,
});
deletePost(1);
