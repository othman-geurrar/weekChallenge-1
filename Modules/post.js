const fs = require('fs')

const getAllPosts =()=>{
     let posts = JSON.parse(fs.readFileSync('./Modules/posts.json'));
    return posts
};

const createPost = (post) => {
    const posts = getAllPosts()
    posts.push(post);
    fs.writeFileSync('./Modules/posts.json', JSON.stringify(posts));
    return posts
};

const updatePost = (upd, bod) => {
  posts = getAllPosts();
  let postToUpdate = posts.find((x) => x.title === upd);
  const index = posts.indexOf(postToUpdate);
  let updatedPost = Object.assign(postToUpdate, bod);
  posts[index] = updatedPost;
  fs.writeFileSync("./Modules/posts.json", JSON.stringify(posts));
  return posts;
};

const postToDelete = (title) => {
  posts = getAllPosts();
  let postToUpdate = posts.find((x) => x.title === title);
  const index = posts.indexOf(postToUpdate);
  posts.splice(index, 1);
  fs.writeFileSync("./Modules/posts.json", JSON.stringify(posts));
  return posts;
};

module.exports = { getAllPosts, createPost, updatePost, postToDelete };