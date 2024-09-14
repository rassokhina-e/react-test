import React from "react";
import CommentApi from '../api/comments';

type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

type CommentReturnType = {
    comments: Comment[],
    isLoading: boolean,
    errMesage: string
}

export function useFetchAllComments(): CommentReturnType {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [isLoading, setLoader] = React.useState(false);
  const [errMesage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setLoader(true)
    try {
      const response = await CommentApi.getAllComments();
      if (response) {
        setComments(response);
      }
      setLoader(false)
    } catch (error) {
      setErrorMessage('Error getting comments.');
      setLoader(false)
    }
  }

  return { comments, isLoading, errMesage }
}

export function useFetchPostComments(postId: string | number): CommentReturnType {
    const [comments, setComments] = React.useState<Comment[]>([]);
    const [isLoading, setLoader] = React.useState(false);
    const [errMesage, setErrorMessage] = React.useState('');
  
    React.useEffect(() => {
      fetchComment(postId);
    }, [postId]);
  
    const fetchComment = async (postId: string | number) => {
      setLoader(true)
      try {
        const response = await CommentApi.getPostComments(postId);
        if (response) {
          setComments(response);
        }
        setLoader(false)
      } catch (error) {
        setErrorMessage('Error getting comment.');
        setLoader(false)
      }
    }
  
    return { comments, isLoading, errMesage }
  
  }
