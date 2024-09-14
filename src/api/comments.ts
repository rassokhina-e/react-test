type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

class CommentApi {
  static async getAllComments(): Promise<Comment[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    if (response) {
      return await response.json();
    } else {
      return [];
    } 
  };
  static async getPostComments(postId: string | number): Promise<Comment[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    if (response) {
      return await response.json();
    } else {
      return [];
    } 
  }
}

export default CommentApi;
