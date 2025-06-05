import React from 'react'
import Comment from './Comment'
// import useFetchPost from '../../hooks/useFetchPosts'
import { useSelector } from 'react-redux'



const CommentContainer = () => {

 const postId = useSelector((store)=>store?.post?.postId)
 console.log(postId)
  return (
    <div>
      <Comment postId={postId}/>
    </div>
  )
}

export default CommentContainer
