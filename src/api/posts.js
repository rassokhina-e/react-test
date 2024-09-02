class PostApi {
  static async getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response) {
      return await response.json();
    } else {
      return [];
    } 
  };
  static async getPost(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (response) {
      return await response.json();
    } else {
      return [];
    } 
  }
}

export default PostApi;
