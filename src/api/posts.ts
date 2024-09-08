type Post = {
  body: string,
  id: number,
  title: string,
  userId: number
}

class PostApi {
  static async getPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response) {
      return await response.json();
    } else {
      return [];
    } 
  };
  static async getPost(postId: string | number): Promise<Post|undefined> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (response) {
      return await response.json();
    } else {
      return undefined;
    } 
  }
}

export default PostApi;
