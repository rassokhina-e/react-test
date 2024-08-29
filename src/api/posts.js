class PostApi {
  static async getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response) {
      return await response.json();
    } else {
      return [];
    } 
  }
}

export default PostApi;
