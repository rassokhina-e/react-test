import React from "react";
import UserApi from '../api/posts';

export function useFetchPosts() {
  const [posts, setPosts] = React.useState([]);
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

export function useFetchPost(postId) {
    const [post, setPost] = React.useState();
    const [isLoading, setLoader] = React.useState(false);
    const [errMesage, setErrorMessage] = React.useState('');
  
    React.useEffect(() => {
      fetchPost(postId);
    }, [postId]);
  
    const fetchPost = async (postId) => {
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
