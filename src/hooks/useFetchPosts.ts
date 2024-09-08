import React from "react";
import UserApi from '../api/posts';

type Post = {
    body: string,
    id: number,
    title: string,
    userId: number
}

type PostsReturnType = {
    posts: Post[],
    isLoading: boolean,
    errMesage: string
}

export function useFetchPosts(): PostsReturnType {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [isLoading, setLoader] = React.useState(false);
  const [errMesage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoader(true)
    try {
      const response = await UserApi.getPosts();
      if (response) {
        setPosts(response);
      }
      setLoader(false)
    } catch (error) {
      setErrorMessage('Error getting posts.');
      setLoader(false)
    }
  }

  return { posts, isLoading, errMesage }

}

export function useFetchPost(postId: string | number) {
    const [post, setPost] = React.useState<Post>();
    const [isLoading, setLoader] = React.useState(false);
    const [errMesage, setErrorMessage] = React.useState('');
  
    React.useEffect(() => {
      fetchPost(postId);
    }, [postId]);
  
    const fetchPost = async (postId: string | number) => {
      setLoader(true)
      try {
        const response = await UserApi.getPost(postId);
        if (response) {
          setPost(response);
        }
        setLoader(false)
      } catch (error) {
        setErrorMessage('Error getting post.');
        setLoader(false)
      }
    }
  
    return { post, isLoading, errMesage }
  
  }
